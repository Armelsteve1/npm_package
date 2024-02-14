const readline = require('readline');
const say = require('say');

function readUserMessage() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter your message: ', (userMessage) => {
        if (userMessage !== '') {
            console.log("User entered: " + userMessage);

            say.speak(userMessage);
        } else {
            console.log("User canceled or entered nothing.");
        }

        rl.close();
    });
}

module.exports = readUserMessage;
