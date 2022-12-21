const number = [1, 2, 2, 3, 3, 4];

// const set = new Set(number);
// console.log(set);

const result = number.filter((val, i, arr) => {
  console.log("val:", val);
  console.log("i:", i);
  // return arr.indexOf(val) = i;
  return arr.indexOf(val) != i;
});
console.log(result);
