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

// Płynne, zapętlone pasy bez przeskoków. Dla osób z ograniczonym ruchem pasy pozostają nieruchome.
function createContinuousMarquee(selector,trackSelector,groupSelector,speed) {
 const viewport=document.querySelector(selector);
 if(!viewport)return;
 const track=viewport.querySelector(trackSelector),original=viewport.querySelector(groupSelector);
 if(!track||!original)return;
 const clones=[];
 const addClone=()=>{
  const clone=original.cloneNode(true);
  clone.removeAttribute(groupSelector.startsWith('[')?groupSelector.slice(1,-1):groupSelector);
  clone.setAttribute('aria-hidden','true');
  clone.setAttribute('inert','');
  track.append(clone);clones.push(clone);
 };
 addClone();
 let width=0,offset=0,last=0,dragging=false,lastX=0;
 const measure=()=>{
  const gap=parseFloat(getComputedStyle(track).columnGap)||0;
  width=original.getBoundingClientRect().width+gap;
  if(width){
   const needed=Math.max(1,Math.ceil(viewport.clientWidth/width));
   while(clones.length<needed)addClone();
   while(clones.length>needed)clones.pop().remove();
   offset=((offset%width)+width)%width;
  }
  track.style.transform='translate3d('+(-offset)+'px,0,0)';
 };
 if('ResizeObserver' in window)new ResizeObserver(measure).observe(original);
 else window.addEventListener('resize',measure);
 measure();
 if(selector==='[data-project-slider]'){
  viewport.addEventListener('pointerdown',event=>{
   if(event.pointerType==='mouse'&&event.button!==0)return;
   dragging=true;lastX=event.clientX;
   try{viewport.setPointerCapture(event.pointerId)}catch(_){}
  });
  viewport.addEventListener('pointermove',event=>{
   if(!dragging||!width)return;
   offset=((offset-(event.clientX-lastX))%width+width)%width;
   lastX=event.clientX;
   track.style.transform='translate3d('+(-offset)+'px,0,0)';
  });
  viewport.addEventListener('pointerup',()=>dragging=false);
  viewport.addEventListener('pointercancel',()=>dragging=false);
 }
 function frame(now){
  if(!last)last=now;
  const dt=Math.min((now-last)/1000,.05);last=now;
  if(width&&!dragging&&!reduceMotion.matches&&!document.hidden){
   offset=(offset+speed*dt)%width;
   track.style.transform='translate3d('+(-offset)+'px,0,0)';
  }
  requestAnimationFrame(frame);
 }
 requestAnimationFrame(frame);
}
createContinuousMarquee('[data-project-slider]','[data-work-track]','[data-work-original]',44);
createContinuousMarquee('[data-investor-marquee]','[data-investor-track]','[data-investor-original]',34);

// Wybór usługi: opis i odpowiadający mu materiał z portfolio.
const offerButtons=document.querySelectorAll('[data-offer]');
function selectOffer(button){
 const key=button.dataset.offer;
 offerButtons.forEach(item=>{
  const active=item===button;
  item.setAttribute('aria-expanded',String(active));
  item.closest('.offer-service').classList.toggle('is-active',active);
  document.getElementById(item.getAttribute('aria-controls')).hidden=!active;
 });
 document.querySelectorAll('[data-offer-image]').forEach(image=>{
  const active=image.dataset.offerImage===key;
  image.classList.toggle('is-active',active);
  image.setAttribute('aria-hidden',String(!active));
 });
 const caption=document.querySelector('[data-offer-caption]');
 if(caption)caption.textContent=button.querySelector('.offer-name').textContent;
}
offerButtons.forEach(button=>{
 button.addEventListener('click',()=>selectOffer(button));
 button.addEventListener('focus',()=>selectOffer(button));
 button.addEventListener('pointerenter',()=>{if(matchMedia('(hover: hover)').matches)selectOffer(button)});
});

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

// Formularz demonstracyjny: nigdy nie wykonuje wysyłki ani połączenia sieciowego.
const demoForm = document.querySelector('#demo-contact-form');
const demoButton = document.querySelector('#demo-form-button');
const demoMessage = document.querySelector('#demo-form-message');
if (demoForm) {
  demoForm.addEventListener('submit', (event) => event.preventDefault());
  demoButton?.addEventListener('click', () => {
    if (!demoForm.reportValidity()) return;
    if (demoMessage) demoMessage.hidden = false;
  });
  demoForm.addEventListener('input', () => { if (demoMessage) demoMessage.hidden = true; });
}
