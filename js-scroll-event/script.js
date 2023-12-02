const container = document.querySelector('.container');
window.addEventListener('scroll', () => {
  // 方向は関係なくスクロールしたことを検知する
  // console.count('スクロールした！');
  // スクロール量もわかる
  const scrollVal = window.scrollY;
  // console.log(scrollVal);
  // １回のスクロールで表示できる画面の高さ（スクロールを重ねることでHTML要素の高さぶんを表示できることになる）
  const windowH = window.innerHeight;
  // 指定したHTML要素の高さ
  const containerH = container.scrollHeight;
  // console.log(windowH, containerH);

  // スクロールし切れていない残りの量
  const scrollable = containerH - windowH;
  // 全て読んだらという条件式
  if (Math.ceil(scrollVal) === Math.ceil(scrollable)) {
    console.log('OK');
    confirm('同意しますか？');
  }
});
