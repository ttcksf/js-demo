// Blobはバイナリーラージオブジェクトと言ってメモリ上にあるバイナリデータを表すオブジェクト。
// バイナリーデータは0と1で表現されるコンピューターが読むデータ

// Fileは"<input type="file"/>"でファイルをアップロードするときなどに登場するローカルファイルシステムに存在するファイルを表すオブジェクト。

// クリックしたらユーザーにWebで作成したファイルをダウンロードしてもらう機能
const btn = document.querySelector(".btn");
document.addEventListener("DOMContentLoaded", () => {
  btn.addEventListener("click", createBlob);
});

// ファイルや画像、オーディオ、動画などのバイナリデータを持てるBlobデータを作る関数
function createBlob() {
  //作成する配列バッファーのサイズをバイト単位で指定。setInt8を実行する数。
  // バイナリデータを使えるようになる
  let arrBfr = new ArrayBuffer(5);

  // 配列バッファーは直接操作できないためデータビューを使用
  let dataV = new DataView(arrBfr);
  // 第一引数にデータを格納する位置、第二引数に値
  dataV.setInt8(0, 104);
  dataV.setInt8(1, 101);
  dataV.setInt8(2, 108);
  dataV.setInt8(3, 108);
  dataV.setInt8(4, 111);
  console.log(new Uint8Array(arrBfr).toString());
  // 配列、配列バッファなど繰り返し処理のできるデータを指定してBlobデータを作成
  // ファイルサイズと種類が返される
  let blob = new Blob([arrBfr], { type: "text/plain" });
  console.log(blob);
  // ファイル生成だとファイル名、種類、サイズ、最終更新日まで含まれる
  let file = new File([arrBfr], "test.txt", { type: "text/plain" });
  console.log(file);

  // ユーザーが生成されたファイルをダウンロードできるようにする
  // BlobもしくはFileなどを指定するとURLを作成
  let url = URL.createObjectURL(file);
  let a = document.createElement("a");
  a.href = url;
  a.download = file.name;
  a.textContent = `ダウンロード:${file.name}`;
  document.querySelector(".container").append(a);
}
