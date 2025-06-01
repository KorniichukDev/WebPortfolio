// theme.js
const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(currentTheme);
toggleButton.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
  toggleButton.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});
