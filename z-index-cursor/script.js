const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('li');

window.addEventListener('mousemove', (e) => {
  // カーソルの現在位置の座標
  // console.log(e.pageX, e.pageY);
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
});

links.forEach((li) => {
  // liタグから離れた時
  li.addEventListener('mouseleave', () => {
    cursor.classList.remove('anime');
    li.classList.remove('active');
  });
  // liタグの上にある時
  li.addEventListener('mouseover', () => {
    cursor.classList.add('anime');
    li.classList.add('active');
  });
});
