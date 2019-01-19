const html = require("../utils/html");
const Page = require("./page");

module.exports = function NotFoundPage() {
  return html`
    <${Page}>
      <h1>Page Not Found!</h1>
      <a href="/">Main page</a>
    <//>
  `;
};
