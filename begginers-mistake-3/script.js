let result = "";
// const age = 20;
const obj = {
  id: "0001",
  name: "aaa",
  // age: 20,
};
const arr = [1, 2, 3];

// 配列とオブジェクトは値がない時にエラーにならないので、エラーにしてシステムを止めないといけない時は自分で作る必要がある
// result = age;
// result = obj.age;
// result = arr[3];

// if (obj.age) {
//   result = obj.age;
// } else {
//   console.error("error");
// }

// if (arr[3]) {
//   result = arr[3];
// } else {
//   console.error("error");
// }

document.body.innerHTML = result;
console.log(result);
