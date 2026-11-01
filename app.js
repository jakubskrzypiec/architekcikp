const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  if (!menu || !navigation) return;
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Otwórz menu');
  navigation.classList.remove('open');
}
if (menu && navigation) {
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    navigation.classList.toggle('open', open);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
}
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reduceMotion.matches) {
  document.documentElement.classList.add('js-reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}

// Hero zachowany z poprzedniej koncepcji: przełączanie dzień / noc.
const hero = document.querySelector('.hero-v2');
const timeButtons = document.querySelectorAll('[data-hero-time]');
function setHeroTime(time) {
  if (!hero) return;
  hero.dataset.time = time;
  timeButtons.forEach(button => {
    const selected = button.dataset.heroTime === time;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}
timeButtons.forEach(button => button.addEventListener('click', () => setHeroTime(button.dataset.heroTime)));

// Karuzela projektów: strzałki, auto-przesuwanie, swipe, pauza przy interakcji.
const slider = document.querySelector('[data-project-slider]');
if (slider) {
  const slides = [...slider.querySelectorAll('.project-slide')];
  const current = document.querySelector('[data-carousel-current]');
  const progress = document.querySelector('[data-carousel-progress]');
  const previous = document.querySelector('[data-slide-prev]');
  const next = document.querySelector('[data-slide-next]');
  let active = 0;
  let autoTimer = null;
  let paused = false;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartScroll = 0;
  let scrollFrame = null;

  function updateStatus() {
    if (current) current.textContent = String(active + 1).padStart(2, '0');
    if (progress) progress.style.width = ((active + 1) / slides.length * 100) + '%';
  }
  function scrollToSlide(index) {
    active = (index + slides.length) % slides.length;
    const target = slides[active].offsetLeft - slides[0].offsetLeft;
    slider.scrollTo({ left: target, behavior: reduceMotion.matches ? 'instant' : 'smooth' });
    updateStatus();
  }
  function pause() { paused = true; }
  function resume() { paused = false; }
  function stopAuto() { if (autoTimer) clearInterval(autoTimer); autoTimer = null; }

  previous?.addEventListener('click', () => scrollToSlide(active - 1));
  next?.addEventListener('click', () => scrollToSlide(active + 1));
  slider.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); scrollToSlide(active + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); scrollToSlide(active - 1); }
  });
  slider.addEventListener('scroll', () => {
    if (scrollFrame) cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(() => {
      const position = slider.scrollLeft;
      const lastReachable = Math.max(0, slider.scrollWidth - slider.clientWidth);
      let nearest = 0;
      let distance = Infinity;
      for (let i = 0; i < slides.length; i++) {
        const left = Math.min(slides[i].offsetLeft - slides[0].offsetLeft, lastReachable);
        const delta = Math.abs(left - position);
        if (delta < distance) { nearest = i; distance = delta; }
      }
      active = nearest;
      updateStatus();
    });
  }, { passive: true });

  slider.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    isDragging = true;
    dragStartX = event.clientX;
    dragStartScroll = slider.scrollLeft;
    slider.classList.add('is-dragging');
    slider.setPointerCapture(event.pointerId);
    pause();
  });
  slider.addEventListener('pointermove', event => {
    if (!isDragging) return;
    slider.scrollLeft = dragStartScroll - (event.clientX - dragStartX);
  });
  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    slider.classList.remove('is-dragging');
    resume();
  }
  slider.addEventListener('pointerup', endDrag);
  slider.addEventListener('pointercancel', endDrag);
  slider.addEventListener('mouseenter', pause);
  slider.addEventListener('mouseleave', () => { if (!isDragging) resume(); });
  slider.addEventListener('focusin', pause);
  slider.addEventListener('focusout', resume);
  const controls = document.querySelector('.carousel-controls');
  controls?.addEventListener('mouseenter', pause);
  controls?.addEventListener('mouseleave', resume);
  document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); else resume(); });
  if (!reduceMotion.matches && slides.length > 1) {
    autoTimer = setInterval(() => { if (!paused && !document.hidden) scrollToSlide(active + 1); }, 4800);
  }
  reduceMotion.addEventListener('change', event => {
    if (event.matches) stopAuto();
    else if (!autoTimer) autoTimer = setInterval(() => { if (!paused && !document.hidden) scrollToSlide(active + 1); }, 4800);
  });
  updateStatus();
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
