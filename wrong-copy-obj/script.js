let obj1 = {
  id: "0001",
  name: "aaa",
  age: 20,
  sports: {
    sports1: "baseball",
    sports2: "soccer",
  },
};
// obj2の中身が変わるとコピー元のobj1が影響を受ける
// let obj2 = obj1;
// スプレッド構文で対策できるが階層が深くなるとダメ
// let obj2 = { ...obj1 };

// コピー元を崩したくない時
// obj1を一度文字列に変換して、その文字列を元にオブジェクトを新規作成している
let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.id = "0002";
obj2.sports.sports1 = "tennis";
console.log("obj1:", obj1);
console.log("obj2:", obj2);
const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
container.textContent = JSON.stringify(obj1);
wrapper.textContent = JSON.stringify(obj2);
