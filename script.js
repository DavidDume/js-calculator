// basic functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (op, a, b) => {
    if(op === 'add') return add(a, b);
    if(op === 'subtract') return subtract(a, b);
    if(op === 'multiply') return multiply(a, b);
    if(op === 'divide') return divide(a, b);
}