'use strict';

window.addEventListener('hashchange', () => {
  const $menuItems = document.querySelectorAll('.menu-link');
  const $activeMenuItem = document.querySelector(`[href="${location.hash}"]`);
  
  $menuItems.forEach(e => e.classList.remove('active__item'));
  $activeMenuItem.classList.add('active__item');
});


document.forms['contact-form'].addEventListener('submit', (e) => {
  e.preventDefault();
  
  const {
    username: {value: name},
    email: {vakue: email},
    message: {value: message}
  } = e.target.elements;
  
  const data = `
    Your Name: ${name}
    Your Email: ${email}
    Your Message: ${message}
  `;
  
  alert(data);
});
