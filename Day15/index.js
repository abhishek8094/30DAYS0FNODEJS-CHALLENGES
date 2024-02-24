const express = require("express");
const app = express();

function loggingMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  console.log("headers:", req.headers);

  if(req.body){
    console.log('Body:', req.body);
  }
  next();
}

app.use(loggingMiddleware);

app.get('/', (req, res) => {
  res.send(`Hurray! I have successfully created logging middleware`);
});

const port = 3000;
app.listen(port, () =>{
  console.log(`Server is running on port ${port}`);
})