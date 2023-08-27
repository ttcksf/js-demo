let student = {
  id: "0001",
  name: "Taro Yamada",
  age: 20,
  sports: {
    sports1: "baseball",
    sports2: "soccer",
  },
};

let copy = student;
// 原本を変えるとコピーも変わる
// student.age = 21;
// コピーを変えても原本が変わる
// copy.id = "0002";

// 最上位のみロックする
Object.freeze(student);
// student.age = 21;
// copy.id = "0002";
// 入れ子は変更できる
// student.sports.sports1 = "tennis";

// 入れ子についてもロックをかけるとOK
// 初期値の設定など変更されたくないオブジェクトに使う
Object.freeze(student.sports);
student.sports.sports1 = "tennis";

const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
container.textContent = JSON.stringify(student);
wrapper.textContent = JSON.stringify(copy);
