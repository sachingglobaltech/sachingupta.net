const menu=document.getElementById('menu'),links=document.getElementById('links');
if(menu&&links){menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false')}));}

const root=document.documentElement;
const themeToggle=document.getElementById('theme-toggle');
const themeIcon=themeToggle?.querySelector('.theme-icon');
const themeLabel=themeToggle?.querySelector('.theme-label');
const themeColor=document.getElementById('theme-color');
function applyTheme(theme){
  root.setAttribute('data-theme',theme);
  const light=theme==='light';
  if(themeIcon) themeIcon.textContent=light?'☾':'☀';
  if(themeLabel) themeLabel.textContent=light?'Dark':'Light';
  if(themeToggle){themeToggle.setAttribute('aria-label',light?'Switch to dark mode':'Switch to light mode');themeToggle.setAttribute('title',light?'Switch to dark mode':'Switch to light mode');}
  if(themeColor) themeColor.setAttribute('content',light?'#f5f8fb':'#07111f');
  try{localStorage.setItem('site-theme',theme)}catch(e){}
}
let savedTheme=null;
try{savedTheme=localStorage.getItem('site-theme')}catch(e){}
const preferred=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';
applyTheme(savedTheme==='light'||savedTheme==='dark'?savedTheme:preferred);
if(themeToggle) themeToggle.addEventListener('click',()=>applyTheme(root.getAttribute('data-theme')==='light'?'dark':'light'));

document.querySelectorAll('section,.cards article,.ai-grid article,.research article,.feature,.timeline>div,.contact-card').forEach((el,index)=>{
  el.classList.add('reveal');
  el.style.transitionDelay=`${Math.min(index%6,5)*60}ms`;
});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.getElementById('year').textContent=new Date().getFullYear();
