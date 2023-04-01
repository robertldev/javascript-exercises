const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce(function(acc, n) { return acc + n; }, 0); 
};

const multiply = function(array) {
  return array.reduce(function(acc, n) { return acc * n; }); 
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(num) {
  let array = [];
  for (let i = num; i > 0; i--) {
    array.push(i);
  }
  return array.reduce(function (acc, n) {
    return acc * n;
  }, 1)
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
