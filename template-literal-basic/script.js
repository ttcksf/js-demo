let data;
const student = {
  id: "0001",
  name: "tanaka",
  age: 20,
};

// data =
//   "学籍番号：" +
//   student.id +
//   " " +
//   "名前：" +
//   student.name +
//   " " +
//   "年齢：" +
//   student.age;
// テンプレートリテラルだと足し算せずにそのまま繋げることができる
data = `学籍番号：${student.id} 名前：${student.name} 年齢：${student.age}`;

// URLにも応用できる
// fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
//       .then(response => response.json())
//       .then(json => console.log(json))

const wrapper = document.querySelector(".wrapper");
// const el = document.createElement("div");
// el.classList.add("test");
// el.innerHTML = "テスト";
// wrapper.appendChild(el);
// HTMLの作成と挿入にも使えて再利用や修正がしやすい
wrapper.insertAdjacentHTML("afterbegin", `<div class="test">テスト</div>`);

const container = document.querySelector(".container");
container.textContent = data;
