const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./src/routers/userRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/user", userRoutes);
app.listen(3008, async () => {
  console.log("Online");
});
