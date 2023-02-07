let num1 = 1;
let num2 = num1;
// =は等しいではなく代入
num2 = num2 + 1;
let str1 = "hello";
let arr1 = [1, 2, 3];
let arr2 = arr1;
// メモリが同じなのでarr1とarr2の両方が変わってしまう
arr2.push(4);
// 値は[1,2,3]で同じだけど別のメモリにあるからarr1,arr2とは別物とされる
// let arr1 = メモリ1 = [1,2,3];
// let arr2 = arr1 = メモリ1 = [1,2,3];
// let arr3 = メモリ2 = [1,2,3];
let arr3 = [1, 2, 3];
arr3.push(4);
console.log("num1:", num1);
console.log("num2:", num2);
console.log("str1:", str1);
console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("arr3:", arr3);
console.log("arr1 === arr2:", arr1 === arr2);
console.log("arr1 === arr3:", arr1 === arr3);

const arr4 = [2, 4, 6];
// 配列とオブジェクトはメモリを変数に代入している
// const arr4 = メモリ3 = [2,4,6];
arr4.push(8);
console.log("arr4:", arr4);
// const arr4 = メモリ3 = [2,4,6]
//       arr4 = 100
arr4 = 100;
console.log("arr4:", arr4);

// const num3 = 100;
// num3 = num3 + 1;
// console.log("num3:", num3);
