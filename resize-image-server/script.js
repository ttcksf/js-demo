const input = document.querySelector('.input');
const box = document.querySelector('.box');

input.addEventListener('change', (e) => {
  let image = e.target.files[0];

  let reader = new FileReader();
  reader.readAsDataURL(image);

  reader.onload = (e) => {
    const imgTag = document.createElement('img');
    imgTag.src = e.target.result;

    imgTag.onload = (e) => {
      const canvas = document.createElement('canvas');
      const widthSize = 400;
      canvas.width = widthSize;
      const ratio = widthSize / e.target.width;
      canvas.height = e.target.height * ratio;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(imgTag, 0, 0, canvas.width, canvas.height);
      const newUrl = ctx.canvas.toDataURL('images/png', 90);
      const newImgTag = document.createElement('img');
      newImgTag.src = newUrl;
      box.appendChild(newImgTag);

      // 暗号化されたbase64をファイルに変換する
      let converted = convertFile(newUrl);
      console.log(converted);
      uploadImg(converted);
    };
  };
});

function convertFile(url) {
  // カンマを起点にトリミング
  let arr = url.split(',');
  // console.log(arr);
  // ファイル形式だけ取り出す
  let mime = arr[0].match(/:(.*?);/)[1];
  let data = arr[1];
  // console.log(mime);
  // console.log(data);
  // base64から復号化する
  let dataStr = atob(data);
  // console.log(dataStr);
  // 型付き配列に変換（引数にデータの長さ）
  let dataArr = new Uint8Array(dataStr.length);
  // オブジェクト形式のファイルに変換
  let file = new File([dataArr], 'File.png', { type: mime });
  // console.log(file);

  return file;
}

function uploadImg(file) {
  let url = 'https://jsonplaceholder.typicode.com/posts';
  // キーと値のペアにして送るための仕組み
  let payload = new FormData();
  // fileキーにfileの中身をセットする
  payload.append('file', file);

  let req = new Request(url, {
    method: 'post',
    body: payload,
    mode: 'no-cors',
  });
  fetch(req)
    .then((res) => console.log(res.status, res.statusText))
    .catch(console.warn);
}
