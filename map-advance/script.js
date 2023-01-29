// 1.値（配列）を返すため、値をもらう必要がない処理には適さない
// 2.配列にのみ使用できるためオブジェクトには使えない

const data = [1, 3, 5, 7];
const result = data.map((num) => {
  return num + 1;
});
console.log(result);

// const App = () => {
//   const todos = ["todo1","todo2","todo3","todo4"];
//   return (
//     <>
//       <ul>
//         {todos.map((todo,i)=>(
//           <li key={i}>
//             {todo}
//           </li>
//         ))}
//         {todos.forEach((todo,i)=>(
//           <li key={i}>
//             {todo}
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }

const students = [
  {
    id: "0001",
    name: "AAA",
    age: 20,
  },
  {
    id: "0002",
    name: "BBB",
    age: 19,
  },
  {
    id: "0003",
    name: "CCC",
    age: 18,
  },
];

const formatted = students.map((student) => ({
  // キーは[]で囲うルール
  [student.id]: student.name,
}));
const reformatted = students.map(({ id, name }) => ({
  [id]: name,
}));
console.log(students);
console.log(formatted);
console.log(reformatted);
