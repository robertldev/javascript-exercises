const convertToCelsius = function(fahrenheitInput) {
  celsiusAnswer = (fahrenheitInput - 32) * 0.55555555555;
  return Number(celsiusAnswer.toFixed(1));
};

const convertToFahrenheit = function(celsiusInput) {
  fahrenheitAnswer = celsiusInput * 1.8 + 32;
  return Number(fahrenheitAnswer.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
