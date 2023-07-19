const fetchData1 = async (count) => {
  const array = [];
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${count}`
  );
  const data = await res.json();
  for (let i = 1; i <= count; i++) {
    array.push(data.title);
  }
  // 通常のPromiseはfetchが終わってからforに入る
  // Promise.allとするとfetchとforを非同期（同時に）実行する
  const newArray = await Promise.all(array);
  // console.log(data.title);
  // console.log(array);
  console.log(newArray);
  // return array;
  return newArray;
};
fetchData1(30);
