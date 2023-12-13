const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  return array.length === 0 ? 0 : array.reduce((accumulator, currentValue) => accumulator + currentValue);
};

const multiply = function(array) {
  return array.length === 0 ? 0 : array.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function(numRaise, numPower) {
  return numRaise ** numPower;
};

const factorial = function(num) {
  let outputFactorial = 1;

  if (num <= 1) return outputFactorial;

  let i = 2;
  do {
    outputFactorial *= i;
    i++
  } while (i <= num)

  return outputFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
