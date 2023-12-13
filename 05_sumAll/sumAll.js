const sumAll = function(start, end) {
    // UNDERSTAND the problem
    // Return SUM of all numbers between start and end, inclusive.

    // PLANNING to solve the problem
    // Loop from start through end, add each number to SUM at each step of the loop.
    // Return ERROR in these cases that start and/or end are (1) not number; (2) negative.

    // PSEUDOCODE
    // GET Start and End
    // IF (Start or End or both are negative) or (Start or End or both are not number)
        // RETURN Error
    // END IF
    // IF Start is smaller than End THEN exchange their values
    // SET Sum to 0, Initializer to Start
    // WHILE Initializer is not equal to End
        // ADD Initializer to Sum
        // IF Start is smaller than End
            // INCREMENT Initializer
        // ELSE
            // DECREMENT Initializer
    // END FOR
    // RETURN Sum

    const isNegative = start < 0 || end < 0;
    const isNumber = typeof(start) !== 'number' || typeof(end) !== 'number';

    if (isNegative || isNumber) {
        return 'ERROR';
    }

    if (start > end) {
        [start, end] = [end, start];
    }

    let sum = 0;
    let num = start;

    do {
        sum += num;
        num++;
    } while (num <= end)
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
