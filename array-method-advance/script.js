const arr1 = ['aaa', 'bbb', 'ccc'];
// 元の配列で更新する方法
// arr1[0] = 'ddd';
// 元の配列を変えずにコピーした上で更新する方法
const copyArr1 = arr1.with(0, 'ddd');
console.log(arr1);
console.log(copyArr1);

const arr2 = [1, 2, 3, 4, 5];
// arr2.reverse();
// これでも元の配列を更新してしますのでダメ
// const copyArr2 = arr2.reverse();
const copyArr2 = arr2.toReversed();
console.log(arr2);
console.log(copyArr2);

const arr3 = [1, 2, 3, 4, 5];
const obj = {
  id: '0001',
  name: 'aaa',
  age: 30,
};
// JSは型判定すると配列がオブジェクトとして登録されているのでわかりづらい
console.log(arr3);
console.log(typeof arr3);
console.log(obj);
console.log(typeof obj);
// 配列にのみあるlengthの有無で見分けていた
console.log(arr3.length >= 0);
console.log(obj.length >= 0);
console.log(Array.isArray(arr3));
console.log(Array.isArray(obj));
