module.exports = function funGreetings() {
    const greetings = [
        'Hello, world!',
        'Hola, amigos!',
        'Bonjour, le monde!',
        'Greetings, Earthlings!',
        'Hey there!',
        'Saluton, mondo!',
        'Ahoy, matey!',
        'Hiya!',
        'Namaste!',
        'Howdy, partner!',
        'नमस्ते'
    ];

    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

    const maleAsciiArt = `
         O
        /|\\
        / \\
    `;

    const combinedMessage = `${randomGreeting}\n${maleAsciiArt}`;

    return combinedMessage;
};