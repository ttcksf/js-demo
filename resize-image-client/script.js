const input = document.querySelector('.input');
const box = document.querySelector('.box');

// changeで変更があるたびに実行する
input.addEventListener('change', (e) => {
  // e.targetで変更の原因を取得できる
  // console.log(e);
  let image = e.target.files[0];
  // console.log(image);

  // imgタグのsrcに入れたりダウンロードしたりするために読み取り可能なURLに変換する
  let reader = new FileReader();
  reader.readAsDataURL(image);
  // console.log(reader);

  // FileReaderで確実に読み込まれた時
  reader.onload = (e) => {
    const imgTag = document.createElement('img');
    imgTag.src = e.target.result;

    // imgTagがロードされるのを待ってから
    imgTag.onload = (e) => {
      // canvasで画像データを加工することでダウンロード、送信するデータを変更できる
      const canvas = document.createElement('canvas');
      const widthSize = 400;
      canvas.width = widthSize;
      // サイズ比率
      const ratio = widthSize / e.target.width;
      canvas.height = e.target.height * ratio;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(imgTag, 0, 0, canvas.width, canvas.height);
      // ファイル形式、画質（100％が基準）
      const newUrl = ctx.canvas.toDataURL('images/png', 90);
      const newImgTag = document.createElement('img');
      newImgTag.src = newUrl;
      box.appendChild(newImgTag);
    };
  };
});
