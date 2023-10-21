// nameプロパティだけを集めてグループ化したい例(別の配列を作る)
const users = [
  {
    id: 1,
    name: "aaa",
    age: 20,
  },
  {
    id: 2,
    name: "bbb",
    age: 21,
  },
  {
    id: 3,
    name: "ccc",
    age: 22,
  },
];

let user;
for (let i = 0; i < users.length; i++) {
  // スコープ外
  // const user = users[i].name;
  // スコープ外に変数を宣言したら取得できるが配列ではない
  user = users[i].name;
}
console.log(user);

// 配列を返すmapメソッドを使う方法
// const userName = users.map((user) => {
//   return user.name;
// });
// console.log(userName);

// 空の配列を作ってfor文で格納していく方法
// const userName = [];
for (let i = 0; i < users.length; i++) {
  userName.push(users[i].name);
}
// console.log(userName);
