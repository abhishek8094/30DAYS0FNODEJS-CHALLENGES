const fs = require('fs');

function readFileContent(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
        } else {
            console.log(`File Content:\n${data}`);
        }
    });
}

readFileContent('test-files/file1.txt');
