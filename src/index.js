const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
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
