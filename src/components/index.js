const html = require("../utils/html");
const Page = require("./page");
const Grid = require("./grid");
const Ship = require("./ship");

module.exports = function Index() {
  return html`
    <${Page}
      >here will be game
      <div id="board"><${Grid} /></div>
      <div>
        <${Ship} size=${4} position="horizontal" />
        <${Ship} size=${3} position="horizontal" />
        <${Ship} size=${2} position="horizontal" />
        <${Ship} size=${1} position="horizontal" />
      </div>
    <//>
  `;
};
