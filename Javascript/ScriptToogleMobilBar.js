const burgerIcon = document.getElementById('burger-icon');
const navLinks = document.getElementById('nav-links');

burgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});