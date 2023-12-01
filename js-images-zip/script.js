const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  let zip = new JSZip();
  console.log(input.files);
  console.log(input.files[0].name);
  // HTML要素はNodeListなので配列に変換する
  Array.from(input.files).forEach((data) => {
    // 第一引数にファイル名、第二引数にデータ本体
    zip.file(data.name, data);
  });

  zip
    .generateAsync({ type: 'blob' })
    // 第二引数はフォルダ名
    .then((content) => saveAs(content, 'test-image.zip'));
});
