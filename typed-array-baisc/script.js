// 型つき配列（通常の配列とは違う）
// JavaScriptで何かしらデータを作成するときは配列を作っている
// バイナリーデータの操作に必要、バッファーは、データの塊。これ自体にアクセスする手段を提供しない。
// 16バイトのメモリを確保
let bfr = new ArrayBuffer(16);
console.log(bfr);
// バッファーに格納されている情報にアクセスするには、ビューを使用する必要がある。
// 配列の操作ができるようになるのでデータの読み書きに使用できる
let dv = new DataView(bfr);
console.log(dv);
// データの格納位置、値
dv.setInt8(11, 42);
// 格納した値を確認
let test = dv.getInt8(11);
console.log(test);
for (let i = 0; i < 16; i++) {
  dv.setInt8(i, 1);
}
console.log(dv);
let arr = new Uint8Array(bfr);
console.log(arr);
arr = arr.map((c) => {
  return (c += 2);
});
console.log(arr);
// 型付き配列を利用する API の例
// const xml = new XMLHttpRequest();
// xml.addEventListener("load", (e) => {
//   const text = e.target.responseText;
//   console.log(text);
// });
// xml.open("get", "./test.txt");
// xml.send();
