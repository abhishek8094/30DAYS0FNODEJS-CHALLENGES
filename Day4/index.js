const path = require('path');

function resolvePath(relativePath){
    const absolutePath = path.resolve(__dirname, relativePath);
    console.log(`Resolve path : ${absolutePath}`);
}

resolvePath('../project/folder/file.txt');
resolvePath('nonexistent-folder/file.txt');
