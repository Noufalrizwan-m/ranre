'use strict';
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const nav=document.querySelector('.ran-nav'),navButton=nav.querySelector('.ran-nav-menu'),navLinks=nav.querySelector('.ran-nav-links');
navButton.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');navButton.setAttribute('aria-expanded',String(open));navButton.setAttribute('aria-label',window.siteLanguage==='ar'?(open?'إغلاق القائمة':'فتح القائمة'):(open?'Close menu':'Open menu'));navButton.textContent=open?'×':'☰'});
navLinks.addEventListener('click',()=>{navLinks.classList.remove('open');navButton.setAttribute('aria-expanded','false');navButton.textContent='☰'});
const intro=document.querySelector('.ran-intro');
if(intro&&!reduced){const mark=intro.querySelector('.ran-intro-logo'),target=nav.querySelector('img');target.classList.add('intro-hidden');let done=false,beginTimer,finishTimer;const finish=()=>{if(done)return;done=true;clearTimeout(beginTimer);clearTimeout(finishTimer);target.classList.remove('intro-hidden');intro.remove();document.removeEventListener('keydown',skip)};const skip=e=>{if(e.key==='Escape')finish()};document.addEventListener('keydown',skip);beginTimer=setTimeout(()=>{if(done)return;const from=mark.getBoundingClientRect(),to=target.getBoundingClientRect();intro.classList.add('leaving');mark.style.transform='none';const animation=mark.animate([{left:`${from.left}px`,top:`${from.top}px`,width:`${from.width}px`,height:`${from.height}px`,transform:'none'},{left:`${to.left}px`,top:`${to.top}px`,width:`${to.width}px`,height:`${to.height}px`,transform:'none'}],{duration:1100,easing:'cubic-bezier(.65,0,.2,1)',fill:'forwards'});animation.finished.then(finish).catch(()=>{});finishTimer=setTimeout(finish,1250)},1500)}else intro?.remove();
const scene=document.querySelector('.skyline-scene'),toggle=document.querySelector('.skyline-toggle'),greeting=document.querySelector('.skyline-greeting');
const modeKey='ranre-skyline-mode';
let manualMode=null;
try {const saved=sessionStorage.getItem(modeKey);if(saved==='day'||saved==='night') manualMode=saved} catch {}
function setSkyline(mode){const night=mode==='night';scene.classList.toggle('is-night',night);toggle.setAttribute('aria-checked',String(!night))}
function syncSkyline(){if(manualMode)return;const hour=new Date().getHours();setSkyline(hour>=6&&hour<18?'day':'night')}
syncSkyline();
toggle.addEventListener('click',()=>{manualMode=scene.classList.contains('is-night')?'day':'night';setSkyline(manualMode);try{sessionStorage.setItem(modeKey,manualMode)}catch{}});
if(manualMode)setSkyline(manualMode);
setInterval(syncSkyline,60000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)syncSkyline()});
if(!reduced){let i=0;setInterval(()=>{greeting.classList.add('is-changing');setTimeout(()=>{greeting.textContent=(window.siteLanguage==='ar'?['هلا','مرحباً']:['HALA','WELCOME'])[i=(i+1)%2];greeting.classList.remove('is-changing')},420)},3800)}
// Reveal content once as it comes into view, leaving controls immediately usable.
if(!reduced&&'IntersectionObserver' in window){
 const selectors=['.intro-copy .eyebrow','.intro-copy h2','.intro-copy > p:not(.eyebrow)','.intro-copy .outline-button','.banner-copy .eyebrow','.banner-copy h2','.banner-copy > p:not(.eyebrow)','.section-heading .eyebrow','.section-heading h2','.section-heading > p:not(.eyebrow)','.service-grid article','.approach-grid article','.services-page-hero-copy .eyebrow','.services-page-hero-copy h1','.services-page-hero-copy > p:not(.eyebrow)','.service-considerations > div','.approach-page-intro > div > div','.process-heading','.process-list article','.approach-note > div','.about-story-content .eyebrow','.about-story-content h2','.about-story-content > p:not(.eyebrow)','.about-story-content .outline-button','.about-purpose-card','.about-values-grid article','.contact-heading .eyebrow','.contact-heading h2','.contact-heading > p:not(.eyebrow)','.contact-details','#enquiry-form'];
 const elements=[...document.querySelectorAll(selectors.join(','))];
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-revealed');observer.unobserve(entry.target)}}),{threshold:0.08,rootMargin:'0px 0px -30px 0px'});
 elements.forEach(el=>{el.classList.add('reveal-on-scroll');if(el.matches('.service-grid article,.approach-grid article'))el.style.setProperty('--reveal-delay',`${Array.from(el.parentElement.children).indexOf(el)*110}ms`);observer.observe(el)});
 document.documentElement.classList.add('motion-ready');
}

document.querySelector('#enquiry-form').addEventListener('submit',e=>{e.preventDefault();if(window.validatePhone&&!window.validatePhone()){e.currentTarget.elements.phone.reportValidity();return}const f=new FormData(e.currentTarget);const phone=window.getFormattedPhone?window.getFormattedPhone():f.get('phone');const body=`Name: ${f.get('name')}\nCompany: ${f.get('company')}\nEmail: ${f.get('email')}\nPhone: ${phone}\nSpace: ${f.get('space')}\n\nRequirements:\n${f.get('requirements')}`;window.location.href=`mailto:Dhastagirahamed@ranre.ae?subject=${encodeURIComponent('Property enquiry — '+f.get('space'))}&body=${encodeURIComponent(body)}`});
document.querySelector('#year').textContent=new Date().getFullYear();
