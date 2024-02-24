const express = require("express");
const app = express();
const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Scaler");
}

app.get("/", (req, res) => {
  res.send("Hello! MongoDB");
});

app.listen(8080, () => {
  console.log("server is listening on port 8080");
});
