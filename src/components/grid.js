const html = require("../utils/html");

const ROWS_NUMBER = 10;
const COLS_NUMBER = 10;

module.exports = function Grid() {
  const rows = [];
  for (let i = 0; i < ROWS_NUMBER; i++) {
    const row = [];
    for (let j = 0; j < COLS_NUMBER; j++) {
      row.push(
        html`
          <${Cell} />
        `
      );
    }

    rows.push(
      html`
        <div class="row">${row}</div>
      `
    );
  }
  return html`
    <div class="board">${rows}</div>
  `;
};

function Cell() {
  return html`
    <div class="cell"></div>
  `;
}
