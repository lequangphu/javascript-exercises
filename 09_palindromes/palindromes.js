// UNDERSTAND the problem
    // Determine whether or not a string is palindrome. A palindrome is the same as its reversion, excluding punctuation or word breaks.

// PLANNING to solve the problem
    // How to get only letters from the input string?
        // Use regex, '/[^a-zA-Z]/g'.
    // How to reverse the string?
        // Convert the string to an array, then reverse the array.

// PSEUDOCODE
    // GET string
    // REPLACE punctuation and word breaks with '' using regex
    // SPLIT the string into an array
    // RETURN the comparison of the array and its reversion

const palindromes = function (string) {
    const onlyLetters = string.toLowerCase().replace(/[^a-z0-9]/g, '');

    return onlyLetters === onlyLetters.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
