const text = document.querySelector('h1');
// タグを除いたテキストを取得しておく
const textContent = text.textContent;
// 1文字ずつ切り取って配列に保存される
const splitted = textContent.split('');
// console.log(splitted);

// 一度初期化をしておく
text.textContent = '';
for (let i = 0; i < splitted.length; i++) {
  // 配列splittedから1文字ずつ取り出して埋め直す
  text.innerHTML += `<span>${splitted[i]}</span>`;
}

let char = 0;
let timer = setInterval(() => {
  // 配列で取得できるのでインデックス番号を指定して1文字ずつ取り出す
  const span = text.querySelectorAll('span')[char];
  // console.log(span);
  span.classList.add('fade');
  char++;

  if (char === splitted.length) {
    clearInterval(timer);
    timer = null;
    return;
  }
  // }, 1000);
}, 400);
