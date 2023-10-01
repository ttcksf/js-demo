// 1つのコードを上から下に向かって実行
// console.log("HTML");
// console.log("CSS");
// console.log("PHP");

// 関数は宣言ではなく実行のコードの順番を見る
// function html() {
//   console.log("HTML");
// }
// function css() {
//   console.log("CSS");
// }
// function php() {
//   console.log("PHP");
// }

// 非同期やコールバック関数があると順番が変わる（複数のコードを並行で実行する）
function html() {
  // setTimeout(() => {
  //   console.log("HTML");
  // }, 1000);
  console.log("HTML");
  test();
  function test() {
    console.log("test");
  }
}
function css() {
  console.log("CSS");
}
function php() {
  console.log("PHP");
}
html();
css();
php();
