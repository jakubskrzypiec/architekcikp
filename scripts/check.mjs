import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
const html = await readFile('index.html', 'utf8');
const css = await readFile('style.css', 'utf8');
const js = await readFile('app.js', 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'IDs must be unique');
assert.equal((html.match(/<h1[ >]/g) || []).length, 1, 'Exactly one main heading');
for (const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
  const path = match[1];
  if (/^(?:https?:|mailto:|tel:)/.test(path)) continue;
  await access(path);
}
for (const match of html.matchAll(/href="#([^"]+)"/g)) assert(ids.includes(match[1]), `Missing anchor: ${match[1]}`);
for (const match of css.matchAll(/url\(['"]?([^)'" ]+)['"]?\)/g)) await access(match[1]);
for (const name of ['kia-original.jpg','kia-2.jpg','dom-zory.jpg','dom-zory-2.jpg','kukulek.jpg','kukulek-2.jpg','orzesze.jpg','orzesze-2.jpg']) await access(`assets/${name}`);
assert(js.includes('dialog.showModal()'), 'Project galleries must open');
assert(html.includes('noindex,nofollow'), 'Concept must not be indexed');
console.log('Validated assets, section anchors, font files, gallery data and metadata.');
