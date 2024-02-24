const express = require('express');
const app = express();
const cache = {};
const cacheExpirationTime = 60 * 1000; 

function cachingMiddleware(req, res, next) {
  const cacheKey = req.originalUrl;

  if (cache[cacheKey] && cache[cacheKey].timestamp + cacheExpirationTime > Date.now()) {
    res.send(cache[cacheKey].data);
  } else {
    const originalSend = res.send;
    
    res.send = function (data) {
      cache[cacheKey] = {
        data,
        timestamp: Date.now(),
      };
      originalSend.call(this, data);
    };

    next();
  }
}

app.use(cachingMiddleware);

app.get('/example', (req, res) => {
  res.send('Hello, this is the response!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
