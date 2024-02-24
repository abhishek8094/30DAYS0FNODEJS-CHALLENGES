const path = require('path');

function checkFileExtension(filePath, expectedExtension) {
    const actualExtension = path.extname(filePath);
    if (actualExtension === expectedExtension){
        console.log (`File has the expected extension, Expcted; ${expectedExtension}`);
    }else {
        console.log(`file does not have the expected extension, Excepted: ${expectedExtension}, Actual: ${actualExtension}` );
    }
}

checkFileExtension('test-files/file1.txt', '.txt');
checkFileExtension('test-files/image.png', '.jpg');

