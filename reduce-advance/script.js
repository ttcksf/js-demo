// 1.配列に使用できるがオブジェクトには使用できない
// 2.戻り値は一つの値になる

const data = [1, 3, 5, 7];
// function dataSum(array) {
//   let sum = 0;
//   for (const num of array) {
//     sum += num;
//   }
//   return sum;
// }
// const result = dataSum(data);
const result = data.reduce((sum, num) => {
  return sum + num;
}, 0);
console.log(result);

const dataList = [
  {
    number: 1,
  },
  {
    number: 3,
  },
  {
    number: 5,
  },
  {
    number: 7,
  },
];
const listResult = dataList.reduce((sum, num) => {
  return sum + num.number;
}, 0);
console.log(listResult);
