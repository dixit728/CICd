import express from 'express';
import clipboardy from 'clipboardy';

const app = express();
const port = 3000;

// Array of strings
const stringArray = [
    "Apple", "Banana", "Cherry", "Date", "Elderberry",
    "Fig", "Grapes", "Honeydew", "Kiwi", "Lemon",
    "Mango", "Orange", "Papaya", "Quince", "Raspberry"
];

// Function to get a random subset of strings from an array
const getRandomStrings = (array, count) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
};

// Function to merge strings with spaces
const mergeWithSpaces = (strings) => {
    return strings.join(' ');
};

// Generate and send the merged string as a response
app.get('/', (req, res) => {
    const randomStrings = getRandomStrings(stringArray, 10);
    const mergedString = mergeWithSpaces(randomStrings);

    // Copy the result to clipboard
    clipboardy.writeSync(mergedString);

    // Send the merged string as a response
    res.send(`Merged String: ${mergedString}\n(Copied to clipboard)`);

    console.log("Merged String sent as response:", mergedString);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});