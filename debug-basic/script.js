const first = document.querySelector('.first');
const last = document.querySelector('.last');
// 1. セレクタのタイポはエラー文で確認できる
// const result = document.querySelector('.results');
const result = document.querySelector('.result');
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // 2.エラーでないものはプロパティの値を確認する
  // result.textContent = first + last;
  result.textContent = first.value + last.value;
  console.dir(result);
  console.dir(first);
  console.dir(last);
  // 3. ログポイントを使うと楽
});
