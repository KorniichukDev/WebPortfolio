// formHandler.js
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!validateEmail(email)) {
    alert('Невірний email');
    return;
  }
  if (message.length < 5) {
    alert('Повідомлення повинно містити щонайменше 5 символів');
    return;
  }

  const formData = {
    email,
    message,
    date: new Date().toISOString()
  };

  localStorage.setItem('formData', JSON.stringify(formData));
  alert('Повідомлення успішно надіслано!');
  form.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
