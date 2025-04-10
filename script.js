let display = document.querySelector('.display');
let numbers = document.querySelector('.numbers');
let numberButtons = Array.from(numbers.querySelectorAll("button")).filter((button) => button.id != 'clear' && button.id != 'decimal');
console.log(numberButtons)
numberButtons.forEach((button) => button.addEventListener('click', updateDisplay));

let middleOperators = document.querySelector('.middle-operators');
let operators = middleOperators.querySelectorAll('button')
operators.forEach((button) => button.addEventListener('click', operatorChoice))

let equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    num2 = display.textContent;
    operate(num1, num2, operator);
})

let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    operator = '';
})


let num1 = 0;
let num2 = 0;
let operator;

function operatorChoice(e) {
    operator = e.target.textContent;
    num1 = display.textContent;
    display.textContent = '';
}

function updateDisplay(e) {
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
    return num1 / num2;
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
