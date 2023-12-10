const card = document.querySelector('#card');
const cardId = document.getElementById('card');
// 指定されたセレクターに一致するNodeListを返す
const cards = document.querySelectorAll('.card');
// 指定されたクラス名をすべて持つすべての子要素の配列風オブジェクトを返す
const cardClass = document.getElementsByClassName('card');
console.log(card);
console.log(cards);
console.log(cardId);
console.log(cardClass);

// cards.forEach((card) => {
//   card.classList.add('active');
// });
// NodeListは配列でないからmapは使えない
// cards.map((card) => {
//   card.classList.add('active');
// });

// cardClass.forEach((card) => {
//   card.classList.add('active');
// });
// オブジェクトに対するループを使う
for (const card of cardClass) {
  card.classList.add('active');
}

// 配列
// NodeList
// 配列風オブジェクト
