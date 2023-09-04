const table = document.createElement("table");

for (let i = 1; i <= 4; i++) {
  const row = table.insertRow(i - 1);
  let k = 0;
  for (let j = k; j <= 7; j++) {
    const cell = row.insertCell(j - 1);
    cell.textContent = i + 7;
    k++;
  }
}

document.body.appendChild(table);
