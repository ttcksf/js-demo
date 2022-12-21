// const student = {
//   id: "0001",
//   name: "山田",
//   age: 18,

// };
// student.id = "0002";
// console.log(student.id);

// const student = Object.freeze({
//   id: "0001",
//   name: "山田",
//   age: 18,
//   address: Object.freeze({
//     preference: "Tokyo",
//     block: "Akabane",
//   }),
// });
// student.address.block = "Seatgaya";
// console.log(student.address.block);

const student = Object.freeze({
  id: "0001",
  name: "山田",
  age: 18,
  address: Object.freeze({
    preference: "Tokyo",
    block: "Akabane",
  }),
  circles: Object.freeze(["football", "tennis"]),
});
student.circles.push("baseball");
console.log(student.circles);
