// function calcNum1(a, b) {
//   return a + b;
// }
// 間違い１：関数は実行されているがreturnしただけなのでコンソールには出ない
// calcNum1(1, 2)
// returnの内容をコンソールで出したいならコンソールの中に関数を実行させる
// console.log(calcNum1(1, 2));

function calcNum2() {
  const num = 20;
  console.log(num);
  return "test";
}
calcNum2(); // 関数内のコンソールが実行される
const test = calcNum2(); // 間違い２：returnの内容を変数に格納するだけにしたいとしても、testにはreturnの内容も格納されるだけでなく関数内のコンソールも実行される。
console.log(test); // returnの部分がコンソールに出る
