const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li a');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Закриваємо меню при кліку на будь-який пункт навігації
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});
