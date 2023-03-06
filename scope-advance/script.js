// グローバルスコープ
// const num = 100;
// if (true) {
//   console.log(num);
// }

// ブロックスコープ
// constの方がブロックスコープをデータを守りやすい
// let num = 200;
// if (true) {
//   let num = 100;
//   console.log("スコープ内:", num);
// }
// console.log("スコープ外:", num);

// 入れ子のブロックスコープ;
// function test() {
//   if (true) {
//     const num = 100;
//   }
//   console.log(num);
// }
// test();

// ブロックの内側に入れ子で渡すのはOK
// function test() {
//   const num = 100;
//   if (true) {
//     console.log(num);
//   }
// }
// test();

// モジュールスコープ
console.log("テスト");
import { num } from "./main.js";
console.log(num);
console.log(value);
