// basic functions
const add = (a, b) => Number(a) + Number(b);
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');

const displaySpan = document.querySelector('.result_num');

const numArray = document.querySelectorAll('.number');
const operatorArr = document.querySelectorAll('.operator');
const resultDisplay = document.querySelector('#result');

let isFirstNum = false;
let isSecondNum = false;

let firstNum = '';
let secondNum = '';
let operation;

//doesnt work for numbers bigger than 10... check the isFirstNum and isSecondNum values
const displayNum = n => { 
    if(!isFirstNum) {
        firstNum += n;
        displaySpan.textContent =`${firstNum}`
        isFirstNum = true;
    } else if(!isSecondNum) {
        secondNum += n;
        displaySpan.textContent =`${secondNum}`
        isSecondNum = true
    }  
}

/* const makeOperation = (op) => {   
    operation = op

} */

resultDisplay.addEventListener('click', e => {
    if(operation === 'add') displaySpan.textContent = add(firstNum, secondNum);
    if(operation === 'subtract') displaySpan.textContent =  subtract(firstNum, secondNum);
    if(operation === 'multiply') displaySpan.textContent =  multiply(firstNum, secondNum);
    if(operation === 'divide') displaySpan.textContent =  divide(firstNum, secondNum);
})

numArray.forEach(n => n.addEventListener('click', e => displayNum(e.target.value)));
operatorArr.forEach(o => o.addEventListener('click', e => {
    operation = e.target.value;
    displaySpan.textContent = ''
}));




