const displayValue = document.querySelector('.display');
const equalButton = document.querySelector('#equal');
const backspaceButton = document.querySelector('#backspace');

const calcButtons = document.querySelectorAll('.buttons');
calcButtons.forEach(button => button.addEventListener('click', buttonClicked));

const numberAndOperatorInput = new Object();
numberAndOperatorInput.firstNumber = '';
numberAndOperatorInput.operator = '';
numberAndOperatorInput.secondNumber = '';

let userNumberInput = '';
//let newOperation = true;

function operate(num1, num2, operator) {
    switch (operator) {
        case '*':
            return num1 * num2;
        case '/':
            if (num2 == 0) {
                alert('Your attempt to divide by 0 has caused a black hole that has devoured the universe and everyone in it.  Please refrain from further universe destruction.');
                return;
            }
            return num1 / num2;
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        default:
            alert('Error in operate function');
            break;
    }
}

function operateOnValues(numberAndOperatorInput) {
    let firstValue = Number(numberAndOperatorInput.firstNumber);
    let secondValue = Number(numberAndOperatorInput.secondNumber);
    let operand = numberAndOperatorInput.operator;
    return  Number(operate(firstValue, secondValue, operand).toFixed(2));
}

function buttonClicked(event) { 
    let buttonValue = event.target.value;
    switch (buttonValue) {
        case '+':
        case '-':
        case '*': 
        case '/':
            symbol(buttonValue);
            break;   
        case 'backspace':
            backspace();
            break;   
        case 'clr':
            clear();
            break;            
        case '.':
            decimal();
            break;        
        case '=':
            equal();
            break;            
        default:
            numberInput(buttonValue);
            break; 
    }
}

function symbol(buttonValue) {
    if (userNumberInput == '' && numberAndOperatorInput.firstNumber != '') {
        userNumberInput = numberAndOperatorInput.firstNumber;
        numberAndOperatorInput.firstNumber = '';
    }
    if (userNumberInput == '' || userNumberInput == '.') {
        return;
    }
    if (numberAndOperatorInput.firstNumber == '') {
        numberAndOperatorInput.firstNumber = userNumberInput;
        userNumberInput = '';
    }
    if (numberAndOperatorInput.operator == '') {
        numberAndOperatorInput.operator = buttonValue;
    }    
    displayValue.textContent = Object.values(numberAndOperatorInput).join(' ');       
    if (numberAndOperatorInput.firstNumber == '' || 
        numberAndOperatorInput.operator == '' ||
        userNumberInput == '') {
            return;
    }
    else {
        equal();
        numberAndOperatorInput.operator = buttonValue;
    }
}

function backspace() {
    if (userNumberInput != '') {
        userNumberInput = userNumberInput.toString().slice(0, -1);
        if (Object.values(numberAndOperatorInput).every(value => value == '')) {
            displayValue.textContent = userNumberInput;
        }
        else {
            displayValue.textContent = `${numberAndOperatorInput.firstNumber} ${numberAndOperatorInput.operator} ${userNumberInput}`
        }
        return;
    }
    else if (numberAndOperatorInput.operator != '') {
        numberAndOperatorInput.operator = '';
        userNumberInput = numberAndOperatorInput.firstNumber
        numberAndOperatorInput.firstNumber = '';
        displayValue.textContent = userNumberInput;
        return;
    }
    else if (userNumberInput == '' && numberAndOperatorInput.operator == '') {
        userNumberInput = numberAndOperatorInput.firstNumber;
        numberAndOperatorInput.firstNumber = '';
        backspace();
    }
}

function clear() {
    displayValue.textContent = '0';
    numberAndOperatorInput.firstNumber = '';
    numberAndOperatorInput.secondNumber = '';
    numberAndOperatorInput.operator = '';
    userNumberInput = '';
}

function decimal() {
    if (userNumberInput.includes('.') || displayValue.textContent.includes('.')) {
        alert('Number already contains a decimal');
        return;
    }
    userNumberInput += '.';
    displayValue.textContent += '.';
}

function equal() {
    if (numberAndOperatorInput.firstNumber == '' || 
        numberAndOperatorInput.operator == '' ||
        userNumberInput == '' || userNumberInput == '.') {
            return;
    }
    else {
        numberAndOperatorInput.secondNumber = userNumberInput;
        result = operateOnValues(numberAndOperatorInput);
        displayValue.textContent = result;
        numberAndOperatorInput.firstNumber = result;
        numberAndOperatorInput.secondNumber = '';
        numberAndOperatorInput.operator = '';
        userNumberInput = '';
    }
}

function numberInput(buttonValue) {
    if (userNumberInput == '' && numberAndOperatorInput.operator == '' && numberAndOperatorInput.firstNumber != '') {
        userNumberInput = numberAndOperatorInput.firstNumber;
        numberAndOperatorInput.firstNumber = '';
    }
    userNumberInput += buttonValue;
    if (Object.values(numberAndOperatorInput).every(value => value == '')) {
        displayValue.textContent = userNumberInput;
    }
    else {
        displayValue.textContent = `${numberAndOperatorInput.firstNumber} ${numberAndOperatorInput.operator} ${userNumberInput}`
    }
}