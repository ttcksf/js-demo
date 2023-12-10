const students = [
  {
    id: '0001',
    name: '田中太郎',
    age: 20,
  },
  {
    id: '0002',
    name: '吉田純平',
    age: 18,
  },
  {
    id: '0003',
    name: '高橋大輔',
    age: 22,
  },
];
// 年齢が20歳以上の人を集める
// const results = students.filter((student) => student.age >= 20);
// filterは条件に一致したものをまとめる
// console.log(results);
const results = Object.groupBy(students, (student) => student.age >= 20);
// 条件に一致していないものも含めたグルーピングがされている
console.log(results);
console.log(results.true);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy
// プロパティで分けることもできる
const student = Object.groupBy(students, ({ name }) => name);
console.log(student);
