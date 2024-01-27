const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
window.addEventListener('scroll', () => {
  let value = window.scrollY;
  console.log(value);
  section1.style.clipPath = `circle(${value}px at 0 0)`;
  section2.style.clipPath = `circle(${value}px at 100% 100%)`;
});
