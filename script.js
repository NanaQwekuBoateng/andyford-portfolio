// =============================================
// Mobile Menu Toggle
// =============================================
const button = document.querySelector('.menu');
const links = document.querySelector('.links');

if (button && links) {
  // Toggle menu open/closed state
  button.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });

  // Close menu when a navigation link is clicked
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
    });
  });
}

// =============================================
// Dynamic Footer Year
// =============================================
const year = document.querySelector('#year');
if (year) {
  year.textContent = new Date().getFullYear();
}
