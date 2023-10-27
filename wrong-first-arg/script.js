// デフォルト引数
// const minusNum = (a, b = 1) => {
//   console.log(a - b);
// };
// minusNum(5);

// 第一引数がデフォルトのときは実行時に、undefinedを書かないと第二引数が第一引数の方に当たってしまう
const minusNum = (a = 10, b) => {
  console.log(a - b);
};
minusNum(undefined, 5);
