// UNDERSTAND the problem
// Determine whether or not a year is a leap year.

// PLANNING to solve the problem
// Conditions for a year to be a leap year: (1) divisible by 4; (2) not divisible by 100; (3) divisible by 400.

// PSEUDOCODE
// GET Year
// IF Year is divisible by 4
    // IF Year is not divisible by 100
        // RETURN true
    // ELSE IF Year is divisible by 400
        // RETURN true
// END IF
// RETURN false

const leapYears = function(year) {
    if (year % 4 === 0) {
        if (year % 100) {
            return true;
        } else if (year % 400 === 0) {
            return true;
        }
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
