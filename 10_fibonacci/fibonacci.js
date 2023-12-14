// UNDERSTANDING the problem
    // Return a number in a given position of the Fibonnaci sequence, in which each number is the sum of the two preceding numbers.
// PLANNING to solve the problem
    // Generate the Fibonnaci sequence up to the given position
        // Accept only positive number (the number's type can be number or string)
        // Begin with the first two values F1 = 1 and F2 = 1
    // Return the last number
// PSEUDOCODE
    // GET the fibonnaci position
    // IF the position is negative THEN RETURN 'OOPS'
    // IF the position is less than 3 THEN RETURN 1
    // SET initializer i to 3
    // WHILE initializer less than or equal to the position
        // SET a temporary TEMP to the second fibonnaci F2
        // SET F2 to the sum of F1 and F2
        // SET F1 to TEMP
        // INCREMENT i
    // RETURN F2
const fibonacci = function(fibonacciPosition) {
    if (fibonacciPosition < 0) return 'OOPS';
    if (fibonacciPosition < 3) return 1;

    let f1 = 1;
    let f2 = 1;
    let i = 3;
    while (i <= fibonacciPosition) {
        let temp = f2;
        f2 += f1;
        f1 = temp;
        i++;
    }
    
    return f2;
};

// Do not edit below this line
module.exports = fibonacci;
