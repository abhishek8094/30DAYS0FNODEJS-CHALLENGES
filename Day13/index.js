const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    console.log('WebSocket connection established');

    ws.on('message', (message) => {
      console.log(`Received message: ${message}`);

      ws.send(`Echo: ${message}`);
    });

    ws.on('close', () => {
      console.log('WebSocket connection closed');
    });
  });
}

setupWebSocket(server);

app.get('/websocket', (req, res) => {
  res.sendFile(__dirname + '/Websocket.html');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
