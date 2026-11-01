const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Otwórz menu');
  navigation.classList.remove('open');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

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
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}

const motion = document.querySelector('.motion-toggle');
function setPaused(paused) {
  document.body.classList.toggle('motion-paused', paused);
  motion.setAttribute('aria-pressed', String(paused));
  motion.setAttribute('aria-label', paused ? 'Wznów animację hero' : 'Wstrzymaj animację hero');
  motion.textContent = paused ? '▷' : 'Ⅱ';
}
setPaused(reduceMotion.matches);
motion.addEventListener('click', () => setPaused(motion.getAttribute('aria-pressed') !== 'true'));
reduceMotion.addEventListener('change', event => setPaused(event.matches));

const filterButtons = document.querySelectorAll('[data-filter]');
function filterProjects(category) {
  filterButtons.forEach(button => {
    const active = button.dataset.filter === category;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('.project-card').forEach(card => {
    card.hidden = category !== 'wszystkie' && card.dataset.category !== category;
    card.classList.add('visible');
  });
}
filterButtons.forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter)));
document.querySelectorAll('[data-filter-link]').forEach(link => link.addEventListener('click', () => filterProjects(link.dataset.filterLink)));

const projects = {
  kia: {
    title: 'Salon KIA', category: 'Bytom / Obiekt usługowy',
    description: 'Wyrazista, ciemna bryła i przeszklona fasada. Dwa ujęcia projektu salonu KIA w Bytomiu z portfolio pracowni Architekci KP. Poniżej prezentujemy oryginalne wizualizacje — artystyczny wariant AI został wykorzystany wyłącznie w otwarciu strony.',
    images: ['kia-original.jpg', 'kia-2.jpg'],
    source: 'https://architekci-kp.pl/'
  },
  zory: {
    title: 'Dom przy Czapli', category: 'Żory / Dom jednorodzinny',
    description: 'Dom jednorodzinny przy ulicy Czapli w Żorach. Zestawienie jasnych płaszczyzn, drewna i dużych przeszkleń. Wybrane wizualizacje z portfolio pracowni.',
    images: ['dom-zory.jpg', 'dom-zory-2.jpg'],
    source: 'https://architekci-kp.pl/projekty/domy/'
  },
  kukulek: {
    title: 'Nowy rozdział domu', category: 'Katowice, ul. Kukułek / Przebudowa domu z lat 60.',
    description: 'Projekt przebudowy domu z lat 60. przy ulicy Kukułek w Katowicach-Brynowie. Nowa perspektywa istniejącej zabudowy, pokazana w dwóch ujęciach z portfolio pracowni.',
    images: ['kukulek.jpg', 'kukulek-2.jpg'],
    source: 'https://architekci-kp.pl/projekty/domy/przebudowa-domu-z-lat-60-tych-2/'
  },
  orzesze: {
    title: 'Potencjał na nowo', category: 'Orzesze, ul. Żorska / Przebudowa domu z lat 50.',
    description: 'Projekt przebudowy domu z lat 50. przy ulicy Żorskiej w Orzeszu. Jasna elewacja i uporządkowana forma nadają budynkowi współczesny charakter. Wybrane wizualizacje z portfolio pracowni.',
    images: ['orzesze.jpg', 'orzesze-2.jpg'],
    source: 'https://architekci-kp.pl/projekty/domy/przebudowa-domu-z-lat-60-tych-3/'
  }
};
const dialog = document.querySelector('.project-dialog');
let lastTrigger;
function openProject(key, trigger) {
  const project = projects[key];
  if (!project) return;
  lastTrigger = trigger;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-category').textContent = project.category;
  document.querySelector('#dialog-description').textContent = project.description;
  document.querySelector('#dialog-source').href = project.source;
  const images = project.images.map((file, index) => {
    const image = document.createElement('img');
    image.src = `assets/${file}`;
    image.alt = `${project.title} — wizualizacja ${index + 1}`;
    image.decoding = 'async';
    return image;
  });
  document.querySelector('#dialog-gallery').replaceChildren(...images);
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('modal-open');
}
document.querySelectorAll('[data-open-project]').forEach(trigger => trigger.addEventListener('click', event => {
  event.preventDefault();
  openProject(trigger.dataset.openProject, trigger);
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  lastTrigger?.focus({preventScroll: true});
});
document.querySelector('#dialog-contact').addEventListener('click', () => dialog.close());
document.querySelector('#year').textContent = new Date().getFullYear();
