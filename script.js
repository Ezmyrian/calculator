function addTogether(a, b) {
    return a + b;
}

function subtractFrom(a, b) {
    return a - b;
}

function multiplyBy(a, b) {
    return a * b;
}

function divideBy(a, b) {
    if (b == 0) {
        alert('Your attempt to divide by 0 has caused a black hole that has devoured the universe and everyone in it.  Please refrain from further universe destruction.');
        return;
    }
    return a / b; 
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '*':
            return multiplyBy(num1, num2);
        case '/':
            return divideBy(num1, num2);
        case '+':
            return addTogether(num1, num2);
        case '-':
            return subtractFrom(num1, num2);
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

function buttonClicked(event) { 
    let eventTarget = event.target.value;
    let result = 0;
    switch (eventTarget) {
        case '+':
        case '-':
        case '*': 
        case '/':
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
                numberAndOperatorInput.operator = eventTarget;
            }    
            displayValue.textContent = Object.values(numberAndOperatorInput).join(' ');       
            if (numberAndOperatorInput.firstNumber == '' || 
                numberAndOperatorInput.operator == '' ||
                userNumberInput == '') {
                    return;
            }
            else {
                let equal = new MouseEvent('click', {bubbles: true});
                equalButton.dispatchEvent(equal);
                numberAndOperatorInput.operator = eventTarget;
            }
            break;   

        case 'backspace':
            //when using backspace on an operator, user can then input another number, and then when
            //clicking an operator, the function evaluates.  Fix this to not allow number input until
            //another operator is pressed, followed by another number.
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
                let backspace = new MouseEvent('click', {bubbles: true});
                backspaceButton.dispatchEvent(backspace);
            }

            break;
    
        case 'clr':
            displayValue.textContent = '0';
            numberAndOperatorInput.firstNumber = '';
            numberAndOperatorInput.secondNumber = '';
            numberAndOperatorInput.operator = '';
            userNumberInput = '';
            break;
            
        case '.':
            if (userNumberInput.includes('.') || displayValue.textContent.includes('.')) {
                alert('Number already contains a decimal');
                return;
            }
            userNumberInput += '.';
            displayValue.textContent += '.';
            break;
        
        case '=':
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
            break;
            
        default:
            if (userNumberInput == '' && numberAndOperatorInput.operator == '' && numberAndOperatorInput.firstNumber != '') {
                userNumberInput = numberAndOperatorInput.firstNumber;
                numberAndOperatorInput.firstNumber = '';
            }
            userNumberInput += eventTarget;
            if (Object.values(numberAndOperatorInput).every(value => value == '')) {
                displayValue.textContent = userNumberInput;
            }
            else {
                displayValue.textContent = `${numberAndOperatorInput.firstNumber} ${numberAndOperatorInput.operator} ${userNumberInput}`
            }
            break; 
    }
}
