const axios = require("axios");
const app = require("express")();

app.get("/", (req, res) => res.send("Hello From App!"));
app.get("/orders", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3000");
    res.send(response.data);
  } catch (error) {
    console.log("you got error", error);
  }
});
app.get("/customers", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:4000");
    res.send(response.data);
  } catch (error) {
    console.log("you got error", error);
  }
});

app.listen(2000, () => {
  console.log("app is listening on port 2000");
});
