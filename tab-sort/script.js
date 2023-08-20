const table = document.querySelector(".products");
const tbody = document.querySelector("tbody");
const rows = document.querySelectorAll(".product");
const ths = document.querySelectorAll(".title");
const thDate = document.querySelector(".title-date");

function sortTable(bool = true) {
  const changes = bool ? 1 : -1;

  // console.log(rows);
  // NodeListからArrayにしないとsortメソッドが使えないため
  let rowsArr = Array.from(rows);
  // console.log(rowsArr);
  const sorted = rowsArr.sort((a, b) => {
    // console.log(a);
    // console.log(b);
    const dateA = a.querySelector(".date").textContent;
    const dateB = b.querySelector(".date").textContent;
    // console.log(dateA);
    // console.log(dateB);

    return dateA > dateB ? 1 * changes : -1 * changes;
  });

  // 要素の削除と入れ替え
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  tbody.append(...sorted);

  // ths.forEach((th) => {
  //   th.classList.remove("asc", "desc");
  // });
  thDate.classList.toggle("asc", bool);
  thDate.classList.toggle("desc", !bool);
}
// sortTable(false);
// sortTable(true);

thDate.addEventListener("click", sortTable(true));
