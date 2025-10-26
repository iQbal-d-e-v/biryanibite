const hamburger = document.querySelector('#ham');
const socialHam = document.querySelector('.social-ham');

hamburger.addEventListener('click', () => {
    socialHam.classList.toggle('show');
});

const textContainers = document.querySelectorAll('.text-container');

  textContainers.forEach((box, index) => {
    box.setAttribute('data-scroll', '');
    box.setAttribute('data-scroll-speed', (index % 2 === 0) ? '1.2' : '2'); 
    box.setAttribute('data-scroll-delay', '0.1');
  });
  
  scroll.update(); // refresh locomotive after changes