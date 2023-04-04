const scrollUp = document.getElementById('scroll-up');
const scrollDown = document.getElementById('scroll-down');

window.addEventListener('scroll', () => {
  const halfHeight = window.innerHeight / 2;
  const scrollPosition = window.scrollY;

  if (scrollPosition > halfHeight) {
    scrollUp.style.display = 'block';
    scrollDown.style.display = 'none';
  } else {
    scrollUp.style.display = 'none';
    scrollDown.style.display = 'block';
  }
});

scrollUp.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

scrollDown.addEventListener('click', () => {
  window.scrollTo(0, document.body.scrollHeight);
});
