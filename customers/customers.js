const express = require("express")();

express.get("/", (req, res) => res.send("Hello from Customers!"));

express.listen(4000, () => {
  console.log("customers is listening on port 4000");
});
