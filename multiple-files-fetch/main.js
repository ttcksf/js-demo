const input = document.querySelector(".input");
// JSONファイルの複数選択を実装
input.addEventListener("change", (e) => {
  let files = input.files;
  if (files.length > 0) {
    console.log(files);
    // このURLはjsonのみアップできる
    let url = "https://jsonplaceholder.typicode.com/posts";
    // 複数のファイルを送信する場合は、ヘッダーを設定できない。ブラウザがデータそれぞれを認識するためにboundary(--xxxxxxxみたいな枕詞)と呼ばれる区切り文字を使用するため。FormDataオブジェクトを使用するとブラウザが自動的にこのヘッダーを設定。
    let formData = new FormData();
    // appendで追加情報をFormDataオブジェクトに書けるためデータのそれぞれを見分けがつくように整理すると良い
    formData.append("name", "テスト");
    for (let i = 0; i < files.length; i++) {
      formData.append(`${i}番目のファイル`, files[i], files[i].name);
    }
    console.log(formData);
    let req = new Request(url, {
      body: formData,
      method: "POST",
      // CORSエラー回避
      mode: "no-cors",
    });
    fetch(req)
      .then((res) => console.log(res.status, res.statusText))
      .catch(console.warn);
  } else {
    console.log("選択されていません");
  }
});
// 検証ツール→ネットワーク→リソース選択(posts)→ヘッダー→ペイロード（解析）、ペイロード（ソース）
