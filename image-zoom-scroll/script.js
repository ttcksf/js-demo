const mv = document.querySelector('.mv');

window.addEventListener('scroll', function () {
  let scroll = window.scrollY;
  // 画像のwidthを大きくする
  mv.style.width = 100 + scroll / 8 + '%';
});
