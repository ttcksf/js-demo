// const array = [];
const array = ["A", "B", "C", "D"];
array.push("E");
// array.push("F");
array.push([1, 2]);
// array[0] = ["a", "b"];
// console.log(array);
// console.log(array[0]);
// console.log(array.length);
// console.log(array[5][1]);

// 配列とオブジェクトの違いは連番で管理するか、名前で判定するか
const obj = {
  id: "0001",
  name: "aaa",
  age: 20,
};
obj.id = "0002";
obj.email = "test@test.jp";
obj.sports = ["baseball", "soccer"];

// console.log(obj);
// console.log(obj.id);

const data = ["a", "b", { id: "0001", name: "aaa", age: 20 }];
// console.log(data);
console.log(data[2].id);
