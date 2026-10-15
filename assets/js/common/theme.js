/** Light/dark preference shared by every page, including direct project URLs. */
const KEY = 'mode';

function readTheme() {
  try { return localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light'; }
  catch { return 'light'; }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const dark = document.getElementById('dark');
  const light = document.getElementById('light');
  if (dark) dark.style.display = theme === 'dark' ? 'none' : 'block';
  if (light) light.style.display = theme === 'dark' ? 'block' : 'none';
}

export function initTheme() {
  applyTheme(readTheme());
  const selectTheme = (theme) => {
    try { localStorage.setItem(KEY, theme); } catch { /* private browsing */ }
    applyTheme(theme);
  };
  document.getElementById('dark')?.addEventListener('click', () => selectTheme('dark'));
  document.getElementById('light')?.addEventListener('click', () => selectTheme('light'));
  window.addEventListener('storage', (e) => {
    if (e.key === KEY) applyTheme(readTheme());
  });
}
