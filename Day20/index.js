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

async function averageAgeOfUsers(req, res) {
   const Average_Age = await User.aggregate([
    {
      $group: {
        _id: null,
        averageAge: { $avg: '$age' }
      }
    }
  ])
  res.json(Average_Age[0]);
  console.log(Average_Age);
}

app.get("/" , (req,res) => {
  res.send("find average of users");
})

app.get("/average-age", averageAgeOfUsers);


app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
