// 配列のコピー
const array1 = [1, 2, 3];
const array2 = [...array1];
console.log("array1:", array1);
console.log("array2:", array2);

// 配列の合体
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// // const array3 = [...array1, ...array2];
// const array4 = [...array2, ...array1];
// console.log("array1:", array1);
// console.log("array2:", array2);
// // console.log("array3:", array3);
// console.log("array4:", array4);

// 文字列
// const string = "tanaka";
// const array1 = [...string];
// console.log(array1);

// オブジェクトのコピー
// const obj1 = {
//   id: "0001",
//   name: "AAA",
//   age: 20,
// };
// const obj2 = {
//   ...obj1,
// };
// console.log("obj1:", obj1);
// console.log("obj2:", obj2);

// オブジェクトの合体
// const obj1 = {
//   id: "0001",
//   name: "AAA",
// };
// const obj2 = {
//   id: "0002",
//   age: 20,
// };
// const obj3 = {
//   ...obj1,
//   ...obj2,
// };
// console.log("obj1:", obj1);
// console.log("obj2:", obj2);
// console.log("obj3:", obj3);

// 関数
// function test(num1, num2) {
//   console.log([num1, num2]);
// }
// test(1, 3);
function test(...num) {
  console.log(num);
}
test(1, 3, 5, 7);

// 分割代入
// const obj1 = {
//   id: "0001",
//   name: "AAA",
//   age: 20,
// };
// const { name, age } = obj1;
// console.log("name:", name);
// console.log("age:", age);

// const obj2 = {
//   id: "0001",
//   name: "AAA",
//   age: 20,
// };
// const { id, ...other } = obj2;
// console.log("id:", id);
// console.log("other:", other);
