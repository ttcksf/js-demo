const student = {
  name: "田中太郎",
  gender: "male",
  age: 20,
};

// const studentName = student.name;
// const studentGender = student.gender;
// const studentAge = student.age;
// console.log(studentName);
// console.log(studentGender);
// console.log(studentAge);

// オブジェクトの分割代入
// const { name, gender, age } = student;
// console.log(name);
// console.log(gender);
// console.log(age);

// const array = ["aaa", "bbb", "ccc"];
// const str1 = array[0];
// const str2 = array[1];
// const str3 = array[2];
// console.log(str1);
// console.log(str2);
// console.log(str3);

// 配列の分割代入
// const [str1, str2, str3] = array;
// console.log(str1);
// console.log(str2);
// console.log(str3);

const array = ["aaa", "bbb", "ccc"];

// 配列のスプレッド構文
const [str1, ...other] = array;
// スプレッドは最初の要素にはできない
// const [...other, str1] = array;
console.log(str1);
console.log(other);

// オブジェクトにもスプレッド構文が使える
// const { name, ...more } = student;
// console.log(name);
// console.log(more);

const data = {
  id: "0001",
  title: "タイトル",
  // desc: "説明文です",
};
// プロパティの値が保証されてないものは分割代入で初期値を決めておくと良い（初期値がないとundefinedになる）
const { id, title, desc = "" } = data;
console.log(id);
console.log(title);
console.log(desc);
// 関数の分割代入でも使える（関数の場合はnullが来る可能性がありエラーで止まる）
function getData() {
  return ["AAA", "BBB"];
  // return null;
}
const [returnA, returnB] = getData() || "";
console.log(returnA);
console.log(returnB);

const place = {
  area: "関東エリア",
  pre: {
    tokyo: "東京",
    saitama: "埼玉",
    kanagawa: "神奈川",
  },
};

// ネストされた場合の分割代入は親子の指定に注意
// この書き方だと親のpreは取れない
// const {
//   area,
//   pre: { tokyo, saitama, kanagawa },
// } = place;

const {
  area,
  pre: { tokyo, saitama, kanagawa },
  pre, // 親プロパティは別で分割しておく
} = place;

// console.log(area);
// console.log(tokyo);
// console.log(saitama);
// console.log(kanagawa);
// console.log(pre);

// const text = (place) => {
//   console.log(
//     `${place.area}は${place.pre.tokyo},${place.pre.saitama},${place.pre.kanagawa}です`
//   );
// };
// 関数の引数にも分割代入が使えて、ReactのPropsはこの原理で動く
const text = ({ area, pre: { tokyo, saitama, kanagawa } }) => {
  console.log(`${area}は${tokyo},${saitama},${kanagawa}です`);
};
text(place);
