/** @format */

document.addEventListener('DOMContentLoaded', function () {
  let body = document.body;
  let table = document.createElement('table');

  function createTable(row, col) {
    let num = 1;
    for (let i = 0; i < row; i++) {
      let tr = document.createElement('tr');
      for (let j = 0; j < col; j++) {
        let td = document.createElement('td');
        td.textContent = num++;
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    body.appendChild(table);
  }

  createTable(8, 10);
});
