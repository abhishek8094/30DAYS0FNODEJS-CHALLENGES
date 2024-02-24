const express = require("express");
const app = express();
const PORT = 8080;

function positiveIntegerHandler(req, res) {
  const num = parseInt(req.query.num);
  
  if(!isNaN(num) && num > 0){
    res.send("Success! Number is positive integer.");
  }else{
    next(new Error("Number must be a positive integer"));
  }
}

function errorHandler(err, req, res, next){
  if(err.message === "Number must be a positive integer."){
    res.status(400).send("Error: Number must be a positive integer.");
  }else {
    next(err);
  }

}

app.use(errorHandler);
app.get("/positive", positiveIntegerHandler)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
