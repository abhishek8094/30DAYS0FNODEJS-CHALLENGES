const { exec } = require('child_process');

function executeCommand(command) {
    
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error message: ${error.message}`);
            return;
        }
        console.log(`Command output:\n${stdout}`);

        if (stderr) {
            console.error(`Command error:\n${stderr}`);
        }
    });
}

// Test Case
executeCommand('ls -la');
executeCommand('echo "Hello, Node.js!"');
