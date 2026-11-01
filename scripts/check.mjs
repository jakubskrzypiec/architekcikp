import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
const html = await readFile('index.html', 'utf8');
const css = await readFile('style.css', 'utf8') + await readFile('hero.css', 'utf8') + await readFile('premium-v2.css', 'utf8');
const js = await readFile('app.js', 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'IDs must be unique');
assert.equal((html.match(/<h1[ >]/g) || []).length, 1, 'Exactly one main heading');
for (const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
  const path = match[1];
  if (/^(?:https?:|mailto:|tel:)/.test(path)) continue;
  await access(path);
}
for (const match of html.matchAll(/href="#([^"]+)"/g)) assert(ids.includes(match[1]), 'Missing anchor: ' + match[1]);
for (const match of css.matchAll(/url\(['"]?([^)'" ]+)['"]?\)/g)) await access(match[1]);
assert(html.includes('noindex,nofollow'), 'Draft must not be indexed');
assert(html.includes('class="hero hero-v2"'), 'Hero must remain present');
assert.equal((html.match(/class="lux-project"/g) || []).length, 5, 'Expected 5 project placeholders');
assert.equal((html.match(/class="lux-offer-card reveal"/g) || []).length, 6, 'Expected 6 offer cards');
assert(!html.includes('<em>'), 'No italic headings');
assert(js.includes('requestAnimationFrame(frame)') && js.includes('setHeroTime'), 'Continuous slider and day/night interactions must be present');
console.log('Validated section anchors, assets, hero, placeholders and metadata.');
