// 前でも後でもエラーなく実行できる（グローバルコンテキスト）
// test();
// function test() {
//   console.log('test');
// }
// test();

// 前は動作しない（変数は宣言時には未定義になるため）
// console.log(variable());
const variable = function () {
  console.log('test');
};
//　後ろは動作する
console.log(variable());

// これと同じこと
// console.log(student);
// let student = 'tanaka';

// JavaScriptエンジン内では常にすべてのものが登録されなければならないコンテキストという概念がある。

// 関数宣言がスキャンされ利用可能になる
// 変数宣言もスキャンされ、未定義のままになる。必ずしもすぐに使うとは限らないため
