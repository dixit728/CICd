from flask import Flask, render_template
import random
import pyperclip

app = Flask(__name__)

# Array of strings
string_array = [
    "Apple", "Banana", "Cherry", "Date", "Elderberry",
    "Fig", "Grapes", "Honeydew", "Kiwi", "Lemon",
    "Mango", "Orange", "Papaya", "Quince", "Raspberry"
]

# Function to get a random subset of strings from an array
def get_random_strings(array, count):
    random_strings = random.sample(array, count)
    return random_strings

# Function to merge strings with spaces
def merge_with_spaces(strings):
    return ' '.join(strings)

# Route to generate and display the merged string
@app.route('/')
def generate_and_display():
    random_strings = get_random_strings(string_array, 10)
    merged_string = merge_with_spaces(random_strings)

    # Copy the result to clipboard using pyperclip
    pyperclip.copy(merged_string)

    # Return the merged string as the response
    return f'Merged String: {merged_string}<br />(Copied to clipboard)'

if __name__ == '__main__':
    app.run(debug=True)
