// script.js

// Add an interactive hover animation
const links = document.querySelectorAll('.artistic-link');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.letterSpacing = '2px';
  });

  link.addEventListener('mouseout', () => {
    link.style.letterSpacing = 'normal';
  });
});