// 引き継がせたいものにexportをつける
export let main = "main";

let array = [1, 2, 3];

export function calc() {
  let result = 1 + 2;
  console.log(result);
  return "aaa";
}

function loop() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

export default loop;
