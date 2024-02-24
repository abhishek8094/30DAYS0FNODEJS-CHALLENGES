const rateLimitMap = new Map();

function rateLimitMiddleware(req, res, next) {
  const ipAddress = req.ip;

  if (rateLimitMap.has(ipAddress)) {
    const currentTime = Date.now();
    const lastRequestTime = rateLimitMap.get(ipAddress);

    const timeDifference = currentTime - lastRequestTime;

    const rateLimitWindow = 15 * 60 * 1000;

    if (timeDifference < rateLimitWindow) {
      return res.status(429).json({
        error: "Too Many Requests",
        message: "Please try again later.",
      });
    }
  }

  rateLimitMap.set(ipAddress, Date.now());

  next();
}

const express = require("express");
const app = express();

app.use(rateLimitMiddleware);

app.get("/example", (req, res) => {
  res.send("This is an example route with rate limiting.");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
