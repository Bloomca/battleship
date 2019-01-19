const html = require("../utils/html");

module.exports = function Page({ children }) {
  return html`
    <html>
      <head>
        <title>Battleship Online Game</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        ${children}
      </body>
    </html>
  `;
};
