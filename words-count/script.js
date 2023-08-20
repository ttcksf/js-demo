const textarea = document.querySelector(".textarea");
const count = document.querySelector(".words-count");

// const arr = ["aaa", "bbb", "ccc"];
// const arr = "aaa";
// console.log(arr.length);

textarea.addEventListener("keyup", () => {
  let sentence = textarea.value;
  count.innerHTML = sentence.length;
});
