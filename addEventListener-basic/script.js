const box = document.querySelector(".box");
const text = document.querySelector(".text");
const lists = document.querySelectorAll(".list");

box.addEventListener("click", (e) => {
  // console.log(e);
  // targetはクリックした要素
  // console.log(e.target);

  console.log("box");
});
// 入れ子の場合は親も発動する可能性があるのでマークアップに注意
text.addEventListener(
  "click",
  (e) => {
    // クリックイベントが重複する際には子要素でstopPropagationを実行しておく
    e.stopPropagation();
    console.log("text");
  },
  // 一度だけ実行するときはonceをtrueにする（クリックイベントが重複する際には、stopPropagationも無くなるので2回目から親の処理が実行される）
  { once: true }
);

// 複数要素に同じ処理をしたいときは繰り返し処理でやればOK
lists.forEach((list) => {
  list.addEventListener("click", () => {
    console.log("list");
  });
});

// documentにすると現在のページ全てが対象になる
// document.addEventListener("click", (e) => {
//   console.log(e.target);
// });
