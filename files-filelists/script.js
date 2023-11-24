const input = document.querySelector(".input");

input.addEventListener("change", (e) => {
  // inputタグにmultiple属性を追加すると複数選択できる
  // inputタグにaccept属性でファイル形式を限定させることもできる
  let files = input.files;
  // console.log(files);
  // 正しく選択されたかを確認する場合はlengthで条件を作ればOK
  if (files.length > 0) {
    console.log(files);
  } else {
    // ファイル選択した後にキャンセルを押すとリセットされるため
    console.log("選択されていません");
  }
});
