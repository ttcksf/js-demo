async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    // APIの取得が間に合わないのでエラーになる（Promiseが返ってきてない）
    // const data = response.json();
    const data = await response.json();
    console.log(data);

    // Promiseを待たなくても良いので不要
    // await data.forEach((item) => {
    data.forEach((item) => {
      const title = item.title;
      document.write(title + "<br>");
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
