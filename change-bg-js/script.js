const mv = document.querySelector('.mv');
const bg = [
  'https://picsum.photos/id/1/2000',
  'https://picsum.photos/id/2/2000',
  'https://picsum.photos/id/3/2000',
  'https://picsum.photos/id/4/2000',
];
window.addEventListener('scroll', () => {
  let scroll = window.scrollY;
  let view = window.innerHeight;
  // console.log(scroll, view);
  let image = Math.floor((scroll / view) % 4);
  console.log(image);
  mv.style.backgroundImage = `url(${bg[image]})`;
});
