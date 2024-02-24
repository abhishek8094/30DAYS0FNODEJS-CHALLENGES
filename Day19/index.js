const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");

const MONGO_URL = "mongodb://127.0.0.1:27017/User";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

async function addUserWithValidation(user) {
  try {
    const newUser = new User(user);
    await newUser.save();
    console.log('User added successfully');
  } catch (error) {
    console.error('Error adding user:', error.message);
  } finally {
    mongoose.connection.close();
  }
}

addUserWithValidation({ username: 'Abhishek', email: 'wxyz@gmail.com' });

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
