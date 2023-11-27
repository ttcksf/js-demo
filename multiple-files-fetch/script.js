const input = document.querySelector(".input");

input.addEventListener("change", () => {
  let files = input.files;
  if (files.length > 0) {
    // console.log(files);
    // console.log("content-type", files[0].type);
    // console.log("content-length", files[0].size);
    // このURLはjsonのみアップできる
    let url = "https://jsonplaceholder.typicode.com/posts";
    let header = new Headers();
    // 文字列で書いてもOKだがプロパティから指定すると修正しなくて良くなる
    header.append("content-type", files[0].type);
    header.append("content-length", files[0].size);
    // URL,オプション（ファイル、ヘッダー、操作名）が必要
    let req = new Request(url, {
      body: files[0],
      headers: header,
      method: "POST",
    });
    fetch(req)
      .then((res) => console.log(res.status, res.statusText))
      .catch(console.warn);
  } else {
    console.log("選択されていません");
  }
});
