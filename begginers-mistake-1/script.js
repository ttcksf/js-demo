const result = (a, b) => {
  // 関数はreturnを持って結果を返す
  // a + b;
  return a + b;
};
// document.body.innerHTML = result(1, 2);

// headタグにdeferなしでJSファイルを読み込むと要素が取得する前に実行されてしまうためエラーになる。HTMLからの要素の取得が不要な場合は問題ないため混在されがち。
// console.log("test");
const container = document.querySelector(".container");
// document.body.innerHTML = container;
// console.log(container);

// constは定数なので値の更新はできない。配列とオブジェクトは特殊なので注意。
// const num = 0;
let num = 0;
for (let i = 0; i < 10; i++) {
  num = num + i;
}
document.body.innerHTML = num;
console.log(num);
