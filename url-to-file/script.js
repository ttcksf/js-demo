fetch("../pc.jpg")
  .then((res) => res.blob())
  // MIMEタイプはファイルに含まれるデータを説明するもので事前に決められている
  // .then((blob) => console.log(blob));
  .then((blob) => {
    console.log(blob);
    // 第一引数に反復データ、第二引数にファイル名、第三引数にMIMEタイプ
    const file = new File([blob], "image", { type: blob.type });
    // console.log(file);
    readFile(file);
  });

function readFile(data) {
  // ファイルを読み込むクラスをインスタンス化
  const fileReader = new FileReader();
  // 新しいインスタンスのメソッドを使用して、データをどのように読み込むか？今回は画像をURLとして読み込む
  fileReader.readAsDataURL(data);
  fileReader.addEventListener("load", () => {
    const res = fileReader.result;
    // URLが表示されるのでブラウザで確認できる（imgタグに渡したりローカルストレージに保存できるようになった）
    console.log(res);

    const a = document.querySelector("a");
    a.href = res;
    a.download = data.name;
  });
}
