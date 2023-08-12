const arr1 = ["bbb", "aaa", "ccc"];
arr1.sort();
const arr2 = [12, 32, 4, 55, 78];
// sort()は文字列に変換して並べ替えるから使えない
// arr2.sort();
arr2.sort((a, b) => {
  // 右ー左を0番目から順番に行い右ー左がプラスになるように並べ替える
  // console.log(a);
  // console.log(b);
  return a - b;
});
const arr3 = ["BBB", "aaa", "ccc"];
// プログラムの世界では英語は大文字が先に来る
// arr3.sort();
arr3.sort((a, b) => {
  return a.localeCompare(b);
});
arr4.sort((a, b) => a.localeCompare(b, "ja", { sensitivity: "base" }));

const container = document.querySelector(".container");
// container.textContent = "aaa";
container.textContent = arr1;
const wrapper = document.querySelector(".wrapper");
// wrapper.textContent = "bbb";
wrapper.textContent = arr2;
const inner = document.querySelector(".inner");
// inner.textContent = "ccc";
inner.textContent = arr3;
// sort().reverse()とすれば逆順もできる
