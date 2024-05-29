const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navi ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show');
});