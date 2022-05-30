const express = require("express");
const path = require("path");

const publicPath = path.join(__dirname, "..", "build");
const port = process.env.PORT || 8000;

const app = express();

app.use(express.static(publicPath));

app.get("*", (_req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
