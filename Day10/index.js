const express = require("express");
const path = require('path');

function staticFileServer(req, res) {
    const app = express();
    const port = 8080;

    app.use(express.static(path.join(__dirname, 'public')));
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    app.listen(port, (req, res) =>{
        console.log(`Server listening on ${port}`);
    });

}

staticFileServer();
