/* js/main.js */

// Create toggle button first
const toggle = document.createElement('button');
toggle.style = 'position:fixed; top:1rem; right:1rem; background:transparent; border:none; font-size:1.5rem; cursor:pointer; opacity:0.7;';
document.body.appendChild(toggle);

// Check for saved theme preference or default to device preference
const getTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  // Check device preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

// Apply theme
const applyTheme = (theme) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    toggle.textContent = '☀️';
  } else {
    document.documentElement.classList.remove('dark');
    toggle.textContent = '🌙';
  }
};

// Initialize theme
const theme = getTheme();
applyTheme(theme);

// Toggle theme on click
toggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(currentTheme);
  localStorage.setItem('theme', currentTheme);
});

// Listen for device theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  // Only auto-switch if user hasn't manually set a preference
  if (!localStorage.getItem('theme')) {
    applyTheme(e.matches ? 'dark' : 'light');
  }
});
