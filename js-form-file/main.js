const input = document.querySelector(".input");
const preview = document.querySelector(".preview");

input.addEventListener("change", () => {
  const fileReader = new FileReader();
  // csvはテキストと同じメソッド
  fileReader.readAsText(input.files[0]);
  fileReader.addEventListener("load", () => {
    console.log(fileReader);
    const csv = fileReader.result;
    // console.log(csv);
    let result = csv.split("\n").map((row) => {
      return row.split(",");
    });
    // console.log(result);
    // preview.textContent = result;

    const table = document.createElement("table");
    // 最後に改行しただけの空の行がある
    for (let i = 0; i < result.length - 1; i++) {
      const tr = document.createElement("tr");
      result[i].forEach((col) => {
        const td = document.createElement("td");
        td.textContent = col;
        tr.appendChild(td);
      });
      table.appendChild(tr);
    }
    preview.appendChild(table);
  });
});
