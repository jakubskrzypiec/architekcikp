(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Header: przezroczysty na hero, jasny po przewinięciu */
  const header = $('.site-header');
  const hero = $('.hero');
  const onScroll = () => {
    header.classList.toggle('is-solid', scrollY > (hero ? hero.offsetHeight - 90 : 40));
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Menu mobilne */
  const burger = $('.burger');
  const menu = $('#mobile-menu');
  const setMenu = open => {
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
  };
  burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  $$('#mobile-menu a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  /* Hero: gdy grafiki istnieją, chowamy puste ramki */
  const probe = (src) => new Promise(res => { const i = new Image(); i.onload = () => res(true); i.onerror = () => res(false); i.src = src; });
  Promise.all([probe('assets/hero-bg.jpg'), probe('assets/hero-building.png')])
    .then(([a, b]) => { if (a && b) hero.classList.add('has-images'); });

  /* Hero: paralaksa warstw — logo przesuwa się wolniej niż budynek */
  const layers = $$('[data-depth]', hero);
  if (!reduce && layers.length) {
    let mx = 0, my = 0, sy = 0, raf = null;
    const render = () => {
      raf = null;
      layers.forEach(l => {
        const d = parseFloat(l.dataset.depth);
        l.style.transform = `translate3d(${mx * d * 40}px, ${my * d * 24 + sy * d}px, 0)`;
      });
    };
    const queue = () => { if (!raf) raf = requestAnimationFrame(render); };
    hero.addEventListener('pointermove', e => {
      mx = e.clientX / innerWidth - .5;
      my = e.clientY / innerHeight - .5;
      queue();
    });
    addEventListener('scroll', () => { if (scrollY < innerHeight * 1.2) { sy = scrollY; queue(); } }, { passive: true });
  }

  /* Wejścia sekcji */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
  }, { threshold: .14, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 70}ms`; io.observe(el); });

  /* Galeria: duplikat kart dla płynnej pętli */
  const track = $('.marquee-track');
  if (track && !reduce) {
    $$('.card', track).forEach(c => { const k = c.cloneNode(true); k.setAttribute('aria-hidden', 'true'); track.appendChild(k); });
  }

  /* Filtry realizacji */
  $$('.filter').forEach(btn => btn.addEventListener('click', () => {
    $$('.filter').forEach(b => { b.classList.toggle('is-active', b === btn); b.setAttribute('aria-selected', b === btn); });
    const f = btn.dataset.filter;
    $$('.card').forEach(c => c.classList.toggle('is-dim', f !== 'all' && c.dataset.cat !== f));
    $('.marquee').classList.toggle('is-paused', f !== 'all');
  }));

  /* Suwak przed / po */
  $$('[data-compare]').forEach(box => {
    const r = $('.compare-range', box);
    const set = () => box.style.setProperty('--pos', r.value + '%');
    r.addEventListener('input', set); set();
  });

  /* Formularz (koncepcja – bez wysyłki) */
  const form = $('.brief');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const note = $('.form-note', form);
    if (!form.checkValidity()) { note.textContent = 'Uzupełnij imię, kontakt i zaznacz zgodę.'; return; }
    note.textContent = 'Dziękujemy — odezwiemy się w ciągu dwóch dni roboczych.';
    form.reset();
  });

  $$('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
