function introduce(age) {
  console.log(`${this.name}さんは${age}歳です`);
}

const person1 = {
  name: "山田",
};

const person2 = {
  name: "鈴木",
};
// bindはthisを切り替えるためのメソッド。bindを使わない場合は関数を実行するオブジェクト内に自動で設定される。
const hello = introduce.bind(person1, 25);
hello();

const resultForm = document.querySelector(".result-form");
const itemArea = document.querySelector(".item-area");

const itemList = [
  {
    id: 1,
    title: "item1",
  },
  {
    id: 2,
    title: "item2",
  },
  {
    id: 3,
    title: "item3",
  },
];

function loadEvent() {
  for (let item of itemList) {
    let el = document.createElement("li");
    el.innerHTML = `
      <span>${item.title}</span>
      <button class="btn">選択</button>
    `;
    itemArea.append(el);
    const btn = el.querySelector("button");
    // これだとthisがbuttonタグ（ローカルスコープ）のため動作しない。
    // btn.addEventListener("click", selectItem.bind(item.id));
    // アロー関数などで関数自体を渡すとthisがwindowになる（グローバルスコープ）ので動作する
    // btn.addEventListener("click", () => selectItem(item.id));
    // もしくはthisをリセットすることでもOK。アロー関数やbindにnullを指定することをbindの回避という
    btn.addEventListener("click", selectItem.bind(null, item.id));
  }
}
loadEvent();

function selectItem(objId) {
  console.log(this);
  const selectedItem = itemList.find((obj) => {
    return obj.id === objId;
  });
  resultForm.value = selectedItem.title;
}

// コールバックとして実行するわけではないのであればスコープは関係ないのでbindを設定する必要はなし
// アロー関数で実行する場合は自動的にグローバルスコープになるのでbindする必要なし
// モダンJSもクラスコンポーネントではなく関数コンポーネントであれば気にしなくてOK
// クラスを定義したり、複雑なコールバック関数を作ったりする昔の書き方で多用される
