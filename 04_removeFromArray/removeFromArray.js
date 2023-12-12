const removeFromArray = function(array, ...args) {
    // Understand the problem: given an array, and arguments to remove from the array, return a new array without the elements.
    let outputArray = [];

    array.forEach((element) => {
        if (!args.includes(element)) {
            outputArray.push(element);
        }
    })

    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
