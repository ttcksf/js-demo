const fetchData = async (count) => {
  const array = [];

  for (let i = 1; i <= count; i++) {
    array.push(
      fetch(`https://jsonplaceholder.typicode.com/todos/${i}`).then((res) =>
        res.json()
      )
    );
  }
  const data = await Promise.all(array);
  console.log(data);
};
fetchData(100);

// 通常のPromiseはfetchが終わってからpushに入る
// Promise.allとするとfetchとpushを非同期（同時に）実行する
