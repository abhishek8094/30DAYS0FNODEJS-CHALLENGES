const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");

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

function getAllUsers(req, res)  {
  User.find()
  .then((users) => {
    res.json(users);
  })
  .catch((err) => {
    console.log("Error", err.message);
    res.status(500).json({ error: "Internal Server Error"});
  })
}

app.get('/users', getAllUsers);

app.listen(3000, () => {
  console.log("server is listening on port 8080");
});
