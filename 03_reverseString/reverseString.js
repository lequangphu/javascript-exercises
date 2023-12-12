const reverseString = function(string) {
    // To reverse a tring, first convert it to an array.
    // Reverse the array, then join its elements into one string.
    // Special case: if input string is empty, return itself.

    if (string === '') {
        return string;
    } else {
        // Split the string to individual letters, stored in an array.
        const array = string.split('');
        // Reverse the array, stored in a new array.
        const reversedArray = array.toReversed();
        // Join the reversed array into one string, return the string, which is reversed of the original string.
        return reversedArray.join('');
    }
};

// Do not edit below this line
module.exports = reverseString;
