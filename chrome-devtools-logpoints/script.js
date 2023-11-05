const arr = ["aaa", "bbb", "ccc"];
const result = document.querySelector(".result");
for (let i = 0; i < arr.length; i++) {
  // console.log(arr.length);
  // console.log(arr[i]);
  let el = `<li>${arr[i]}</li>`;
  result.insertAdjacentHTML("beforebegin", el);
}
// 検証ツールのソースからファイル選択し、行数の部分で右クリックしてログポイントを追加（使い方はコンソールログの引数と同じ感じでOK）
// 文字列やカンマが使えるのでコンソール上で確認するだけなら、コード上で書いたり消したりしなくてOKになった
// 左クリックするとデバックモードのブレークポイント選択になるので注意（再度クリックすれば解除できる）
// ローカルを立ち上げ直してもログポイントは保管されるので何回も書かなくてOK
// ローカルなので他人に見られることもないから好きに書ける
// シークレットモードでやるか、手動で削除すればリセットできる
