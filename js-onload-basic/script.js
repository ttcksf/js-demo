const container = document.querySelector('.container');
window.addEventListener('scroll', () => {
  // スクロール量
  const scrollVal = window.scrollY;
  console.log('scrollVal:', scrollVal);
  // １回のスクロールで表示できる画面の高さ（スクロールを重ねることでHTML要素の高さぶんを表示できることになる）
  const windowH = window.innerHeight;
  console.log('windowH:', windowH);
  // 指定したHTML要素の高さ
  const containerH = container.scrollHeight;
  console.log('containerH:', containerH);
  // スクロールし切れていない残りの量(実務では余裕を持たせる)
  const scrollable = containerH - windowH - 100;
  console.log('scrollable:', scrollable);

  // 全て読んだらという条件式
  if (Math.ceil(scrollVal) >= Math.ceil(scrollable)) {
    confirm('同意しますか？');
  }
});
