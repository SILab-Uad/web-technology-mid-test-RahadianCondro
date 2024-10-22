// TODO: Implement the password generation logic based on user input
const CHAR_SETS = {
    // Character sets for password generation
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    specialChars: "!@#$%^&*()_+~`|}{[]:;?><,./-="
};

function generatePassword(length, options) {
    let chars = '';
    if (options.includeUppercase) chars += CHAR_SETS.uppercase;
    if (options.includeLowercase) chars += CHAR_SETS.lowercase;
    if (options.includeNumbers) chars += CHAR_SETS.numbers;
    if (options.includeSpecialChars) chars += CHAR_SETS.specialChars;

    if (chars.length === 0) {
        alert("Minimal Pilih Satu Bang");
        return null
    }

// TODO: Add event listener to the button to call generatePassword and display the output
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}

// Export the function for use in dom.js
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { generatePassword };
}