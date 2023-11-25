// 型つき配列（通常の配列とは違う）
// JavaScriptでバイナリデータを効率的に処理する制限つきの配列（ファイルサイズの大きくなりがちな画像、動画に使用される）
// バイナリーデータの操作に必要、バッファーは、データの塊。これ自体にアクセスする手段を提供しない。
// 型付き配列の最初のものをバッファーという、直接操作することはできないもの（送信に使う）
// 16バイトのメモリを確保
let bfr = new ArrayBuffer(16);
console.log(bfr);
// バッファーに格納されている情報にアクセスするには、ビューを使用する必要がある。
// 配列の操作ができるようになるのでデータの読み書きに使用できる
let dv = new DataView(bfr);
console.log(dv);
// 渡されたもの引数が型つき配列のインスタンスであるかどうかをチェック
let isView = ArrayBuffer.isView(dv);
// let isView = ArrayBuffer.isView([1, 2, 3]);
console.log(isView);
// 型付き配列で、 8 ビット符号なし整数値の配列
let data = new Uint8Array([3, 5, 7, 9, 11, 13, 15, 17]);
console.log(data);
// 配列ではないが配列で使うメソッドが使えたりする
// let sliced = data.slice(1);
let sliced = data.slice(2);
console.log(sliced);
