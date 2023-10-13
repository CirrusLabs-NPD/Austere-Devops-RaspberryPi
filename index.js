const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO..!!!we will be implementing CI/CD using Jenkins and deploying it to K3 Running on Raspberry Pi!!!!");
});

app.get("/info", (req, res) => {
  res.send("hey this is /info api");
});

app.listen(3000, () => {
  console.log("listening");
});
