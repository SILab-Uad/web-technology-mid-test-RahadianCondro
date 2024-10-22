// TODO: Implement the password generation logic based on user input

const CHAR_SETS = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    specialChars: "!@#$%^&*()_+~`|}{[]:;?><,./-="
};

    // TODO: Create a variable for the character set based on selected options

    // TODO: Generate the password based on the selected criteria

function generatePassword(length, options) {
    // Input validation
    if (!length || typeof length !== 'number' || length < 8 || length > 128) {
        throw new Error("Password length must be between 8 and 128 characters.");
    }

    if (!options || typeof options !== 'object') {
        throw new Error("Options must be provided as an object.");
        
    }


    if (!options.includeUppercase && 
        !options.includeLowercase && 
        !options.includeNumbers && 
        !options.includeSpecialChars) {
        throw new Error("At least one character type must be selected."); 
    }

    let chars = '';
    if (options.includeUppercase) chars += CHAR_SETS.uppercase;
    if (options.includeLowercase) chars += CHAR_SETS.lowercase;
    if (options.includeNumbers) chars += CHAR_SETS.numbers;
    if (options.includeSpecialChars) chars += CHAR_SETS.specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

  
    if (options.includeUppercase && !/[A-Z]/.test(password)) return generatePassword(length, options);
    if (options.includeLowercase && !/[a-z]/.test(password)) return generatePassword(length, options);
    if (options.includeNumbers && !/[0-9]/.test(password)) return generatePassword(length, options);
    if (options.includeSpecialChars && !/[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/.test(password)) return generatePassword(length, options);

    return password;
}
// TODO: Add event listener to the button to call generatePassword and display the output
// For testing purposes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generatePassword, CHAR_SETS };
}