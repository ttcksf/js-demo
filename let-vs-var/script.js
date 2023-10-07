// ①順番を間違えた時の違い
var num1 = 100;
console.log(num1);
// var num1 = 100;

let num2 = 200;
console.log(num2);
// let num2 = 200;

// ②再宣言した時の違い
var num3 = 300;
// これは再代入
num3 = 301;
// これは再宣言（再代入と同じ動きになる）
var num3 = 302;
console.log(num3);

let num4 = 400;
num4 = 401;
// let num4 = 402;
console.log(num4);

// ③ブロックスコープ時の違い
if (true) {
  var num5 = 500;
  let num6 = 600;
  console.log(num5 + 10);
  console.log(num6 + 10);
}
console.log(num5);
console.log(num6);
