const cards = document.querySelector('.cards');

// 発生した変化をentriesにして配列で返す
const mb = new MutationObserver((entries) => {
  // プロパティに変化の履歴が残る
  // https://developer.mozilla.org/ja/docs/Web/API/MutationRecord
  console.log(entries);
});
// observeメソッドで監視する対象を指定（cardsの子要素を指定した）
// mb.observe(cards, { childList: true });
// cardsの属性を監視
// mb.observe(cards, { attributes: true });
// cardsの削除された属性も監視
// mb.observe(cards, { attributes: true, attributeOldValue: true });
// この書き方だとcardsの削除されたclass名に絞って監視
// mb.observe(cards, {
//   attributes: true,
//   attributeOldValue: true,
//   // attributeFilter: ['class'],
//   attributeFilter: ['id'],
// });
// cards.children[0].remove();
// const taskD = document.createElement('div');
// taskD.classList.add('card');
// taskD.innerHTML = 'タスクD';
// cards.appendChild(taskD);
cards.classList.add('active');
cards.classList.remove('active');
cards.id = 'test';

const taskB = document.querySelector('.taskB');
// テキストの変更を監視
// mb.observe(cards.children[0].childNodes[0], {
// 親からの指定だと順番が変わることがあるので要素を指定する方が安全
// mb.observe(taskB.childNodes[0], {
// もしくは親要素を指定してオプションでsubtreeを有効にすると配下にある要素やテキスト全てが対象になる（本体は大量の子要素を抱えている、ランダムな選択がされる場合に使う）
mb.observe(cards, {
  // targetのdataにある
  characterData: true,
  // 直下のoldValueにある
  characterDataOldValue: true,
  subtree: true,
});
