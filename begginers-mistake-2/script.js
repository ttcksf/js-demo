let result;
// let a = 1;
// let b = 1;
// let a = "1";
// let b = 1;

// 配列とオブジェクトはメモリの位置が違うため中身が同じでもイコールにならない。代入すればイコールになる。
let a = [1, 2, 3];
// let b = [1, 2, 3];
let b = a;

// ＝＝は数字に変換して比較するため扱いに注意
// if (a == b) {
//   result = "同じ";
// } else {
//   result = "違う";
// }

if (a === b) {
  result = "同じ";
} else {
  result = "違う";
}
document.body.innerHTML = result;
console.log(result);
