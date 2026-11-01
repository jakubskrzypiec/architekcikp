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

// Jednostajny, zapętlony ruch 1:1 bez snapowania lub skoków.
const viewport = document.querySelector('[data-project-slider]');
if(viewport){
 const track=viewport.querySelector('[data-work-track]'),first=viewport.querySelector('[data-work-original]');
 const second=first.cloneNode(true);second.removeAttribute('data-work-original');second.setAttribute('aria-hidden','true');track.append(second);
 let width=0,offset=0,last=0,direction=1,boost=0,drag=false,lastX=0;
 const measure=()=>{const gap=parseFloat(getComputedStyle(track).gap)||0;width=first.getBoundingClientRect().width+gap;if(width)offset=((offset%width)+width)%width;track.style.transform='translate3d('+(-offset)+'px,0,0)'};
 new ResizeObserver(measure).observe(first);measure();
 const steer=dir=>{direction=dir;boost=performance.now()+1900};
 document.querySelector('[data-slide-prev]')?.addEventListener('click',()=>steer(-1));
 document.querySelector('[data-slide-next]')?.addEventListener('click',()=>steer(1));
 viewport.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button!==0)return;drag=true;lastX=e.clientX;try{viewport.setPointerCapture(e.pointerId)}catch(_){}});
 viewport.addEventListener('pointermove',e=>{if(!drag||!width)return;offset=((offset-(e.clientX-lastX))%width+width)%width;lastX=e.clientX;track.style.transform='translate3d('+(-offset)+'px,0,0)'});
 viewport.addEventListener('pointerup',()=>drag=false);viewport.addEventListener('pointercancel',()=>drag=false);
 function frame(now){
  if(!last)last=now;
  const dt=Math.min((now-last)/1000,.05);last=now;
  if(width&&!drag&&!reduceMotion.matches&&!document.hidden){
   const boosted=now<boost;
   const speed=boosted?230:(window.innerWidth<761?30:43);
   offset=((offset+direction*speed*dt)%width+width)%width;
   track.style.transform='translate3d('+(-offset)+'px,0,0)';
   if(!boosted&&direction<0)direction=1;
  }
  requestAnimationFrame(frame);
 }
 requestAnimationFrame(frame);
}
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
