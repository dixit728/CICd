import clipboardy from 'clipboardy';

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

// Function to display the result and copy to clipboard
const displayAndCopyResult = () => {
    const randomStrings = getRandomStrings(stringArray, 10);
    const mergedString = mergeWithSpaces(randomStrings);

    // Display the result
    console.log("Merged String:", mergedString);

    // Copy the result to clipboard
    clipboardy.writeSync(mergedString);

    console.log("Merged String copied to clipboard:", mergedString);
};

// Call the function
displayAndCopyResult();
