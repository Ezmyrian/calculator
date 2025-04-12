let display = document.querySelector('.display');
let subDisplay = document.querySelector('.sub-display');
let numbers = document.querySelector('.numbers');
let numberButtons = Array.from(numbers.querySelectorAll("button")).filter((button) => button.id != 'clear' && button.id != 'decimal');
numberButtons.forEach((button) => button.addEventListener('click', updateDisplay));

document.addEventListener('keydown', (e) => {
    let key = e.key;
    let numbersAndOperators = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 
        '.', '-', '+', '*', '/', '=', 'Backspace', 'Enter'
    ];
    if (!(numbersAndOperators.includes(key))) return;
    if (numbersAndOperators.indexOf(key) <= 9) {
        display.textContent += key;
    }


})


let middleOperators = document.querySelector('.middle-operators');
let operators = middleOperators.querySelectorAll('button')
operators.forEach((button) => button.addEventListener('click', operatorChoice))

let decimal = document.querySelector('#decimal');
decimal.addEventListener('click', hasDecimal)

function hasDecimal() {
    if (display.textContent.includes('.')) return;
    display.textContent += '.';
}

let backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1)
});

let equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    num2 = display.textContent;
    if (num1 == '' || num2 == '') return;
    operate(num1, num2, operator);
    num1 = '';
    num2 = '';
    operator = '';
    subDisplay.textContent = ' ';
})

let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    display.textContent = '';
    subDisplay.textContent = '';
})


let num1 = '';
let num2 = '';
let operator = '';

function operatorChoice(e) {
    if (num1 == '' && display.textContent != '') num1 = display.textContent;
    if (num1 == '') {
        alert('You must enter a number first');
        return;
    }
    if (operator != '') {
        num2 = display.textContent;
        if (num2 == '') {
            operator = e.target.textContent;
            subDisplay.textContent = `${num1} ${operator}`;
            return;
        }
        operate(num1, num2, operator);
    }
    operator = e.target.textContent;
    num1 = display.textContent;
    subDisplay.textContent = `${num1} ${operator}`;
    display.textContent = '';
}

function updateDisplay(e) {
    if (subDisplay.textContent == ' ') display.textContent = '';
    display.textContent += e.target.textContent;
}


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) return alert('Nice try, but dividing by zero would destroy the universe...Thanos.');
    return (num1 / num2).toFixed(2);
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            display.textContent = add(+num1, +num2);
            break;
        case '-':
            display.textContent = subtract(+num1, +num2);
            break;
        case '*':
            display.textContent = multiply(+num1, +num2);
            break;
        case '/':
            display.textContent = divide(+num1, +num2);
            break;
        default: alert('Error in operate function');
    }
}
