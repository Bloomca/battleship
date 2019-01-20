const html = require("../utils/html");

module.exports = function Ship({ size, position }) {
  const cells = [];
  const cellClasses = `ship-cell ${position}`;
  for (let i = 0; i < size; i++) {
    cells.push(html`
      <div class=${cellClasses} />
    `);
  }
  return html`
    <div>${cells}</div>
  `;
};
