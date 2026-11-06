const toggle = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu(){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');navigation.classList.remove('open');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');navigation.classList.toggle('open',open);});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.header'))closeMenu();});
navigation.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
matchMedia('(min-width:761px)').addEventListener('change',closeMenu);
window.addEventListener('scroll',()=>document.querySelector('.header').classList.toggle('scrolled',window.scrollY>30),{passive:true});
