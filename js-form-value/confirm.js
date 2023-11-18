// ローカルストレージに一時保存したデータを取得
const json = localStorage.getItem("form");
// console.log(json);
// オブジェクトに戻す
const obj = JSON.parse(json);
// console.log(obj);

const first = document.querySelector(".first");
const last = document.querySelector(".last");
const gender = document.querySelector(".gender");

first.innerHTML = obj["firstName"];
last.innerHTML = obj["lastName"];
gender.innerHTML = obj["gender"];
// ローカルストレージの値は削除する
