// Nodeと要素の違い;
// NodeとはHTMLタグやテキスト、コメントなどの全て
// 要素はHTMLタグ
const container = document.querySelector('.container');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
console.log(box1);
console.log(box2);
// 親要素
console.log('親Node:', box1.parentNode);
console.log('親要素:', box1.parentElement);
// テキストが表示される
console.log('子Node:', box1.childNodes);
// HTMLタグがないため空の配列
console.log('子要素:', box1.children);

console.log('親Node:', box2.parentNode);
console.log('親要素:', box2.parentElement);
// コメントも含めた全てのテキストやHTMLタグが表示される
console.log('子Node:', box2.childNodes);
// pタグがあるため子要素はpタグ
console.log('子要素:', box2.children);

// querySelectorAllのように静的なNodeListでは動的に変更を反映しない
const boxes = document.querySelectorAll('.box');
// HTMLCollectionは動的に変更を反映する
// const boxes = document.getElementsByClassName('box');
console.log(boxes);
const newEl = document.createElement('div');
newEl.classList.add('box');
container.appendChild(newEl);
console.log(boxes);

// NodeListも新しく要素の取得をすれば変更分を取り込める
// const newBoxes = document.querySelectorAll('.box');
// console.log(newBoxes);
