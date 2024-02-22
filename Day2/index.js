const fs = require('fs');

function writeToFile(filePath, content) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error(`Error writing to file: ${err.message}`);
        } else {
            console.log(`Data written to ${filePath}`);
        }
    });
}
// Test Case 
// writeToFile('output1.txt', 'Sample content.');
writeToFile('', 'Content in a non-existent folder.');




