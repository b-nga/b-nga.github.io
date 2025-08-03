/* js/main.js */
const toggle = document.createElement('button');
toggle.textContent = '🌙';
toggle.style = 'position:fixed; top:1rem; right:1rem; background:transparent; border:none; font-size:1.5rem; cursor:pointer; opacity:0.7;';
document.body.appendChild(toggle);

toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});
