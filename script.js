const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');

const displaySpan = document.querySelector('.result_num');

const numArray = document.querySelectorAll('.number');

let selectedNum = '';

const displayNum = n => {
    
    selectedNum += n;
    displaySpan.textContent =`${selectedNum}`
}

numArray.forEach(n => n.addEventListener('click', e => displayNum(e.target.value)));


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