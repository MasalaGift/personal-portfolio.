// script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return; // No form on this page

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
  });

  function validateEmail(email) {
    // Basic email regex validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
