const express = require("express")();

express.get("/", async (req, res) => res.json("Hello from Orders!"));

express.listen(3000, () => {
  console.log("orders is listening on port 3000");
});
