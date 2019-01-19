const path = require("path");
const express = require("express");
const { render } = require("welgo");

const html = require("./utils/html");
const IndexPage = require("./components/index");

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", async (req, res) => {
  const page = await render(
    html`
      <${IndexPage} />
    `
  );
  res.send(page);
});

const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  if (!isProduction) {
    console.log(`application is up and running at http://localhost:${PORT}`);
  } else {
    console.log(`application is running at port ${PORT}`);
  }
});
