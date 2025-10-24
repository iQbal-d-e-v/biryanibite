const hamburger = document.querySelector('#ham');
const socialHam = document.querySelector('.social-ham');

hamburger.addEventListener('click', () => {
    socialHam.classList.toggle('show');
});