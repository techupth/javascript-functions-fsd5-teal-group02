// Start coding here
let calculator = {};

calculator.add = (a, b) => {
  return a + b;
};

calculator.subtract = (a, b) => {
  return a - b;
};

calculator.multiply = (a, b) => {
  return a * b;
};

calculator.devide = (a, b) => {
  return a / b;
};

let addResult;

let divideResult;

addResult = calculator.add(10, 20);

console.log(addResult);

divideResult = calculator.devide(3000, 10);

console.log(divideResult);
