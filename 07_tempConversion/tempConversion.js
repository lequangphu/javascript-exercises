const convertToCelsius = function(fDegree) {
  let cDegree = (fDegree - 32) * 5/9;
  
  return parseFloat(cDegree.toFixed(1));
};

const convertToFahrenheit = function(cDegree) {
  let fDegree = cDegree * 9/5 + 32;

  return parseFloat(fDegree.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
