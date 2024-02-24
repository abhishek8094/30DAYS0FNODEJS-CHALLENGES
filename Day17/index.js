const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");

async function addUserToDatabase(user) {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Scaler");

    const newUser = new User(user);
    const savedUser = await newUser.save();

    console.log("successfully added to user", savedUser);
  } catch (err) {
    console.log("Error adding user", err.message);
  } finally {
    mongoose.connection.close();
  }
}

const userObject = {
  username : "Abhishek",
  email:"ABCD@gmail.com"
}

addUserToDatabase(userObject);

app.get("/", (req, res) => {
  res.send("Hello! MongoDB");
});

app.listen(8080, () => {
  console.log("server is listening on port 8080");
});
