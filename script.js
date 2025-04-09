let display = document.querySelector('.display');
let numbers = document.querySelector('.numbers');
let buttons = numbers.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener('click', updateDisplay));

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
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default: alert('Error in operate function');
    }
}
