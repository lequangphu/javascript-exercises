const repeatString = function(string, num) {
    let repeatedString = '';

    if (num === 0) {
        return repeatedString;
    } else if (num < 0) {
        return 'ERROR';
    } else {
        let i = 0;

        do {
            repeatedString += string;
            i++;
        } while (i < num)
        
        return repeatedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
