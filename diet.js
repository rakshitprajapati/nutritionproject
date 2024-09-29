// JavaScript code for dynamic functionality (e.g., menu toggle, data updates)
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
});