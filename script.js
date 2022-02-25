function addTogether(a, b) {
    let add = +a + +b;
    return add;
}

function subtractFrom(a, b) {
    let subtract = a - b;
    return subtract;
}

function multiplyBy(a, b) {
    let multiple = a * b;
    return multiple;
}

function divideBy(a, b) {
    if (b == 0) {
        alert('Your attempt to divide by 0 has caused a black hole that has devoured the universe and everyone in it.  Please refrain from further universe destruction.');
        return;
    }
    division = a / b;
    return division;
}

function operate(num1, num2, operator) {
    let solve = (operator == '*') ? multiplyBy(num1, num2)
        : (operator == '/') ? divideBy(num1, num2)
        : (operator == '+') ? addTogether(num1, num2)
        : (operator == '-') ? subtractFrom(num1, num2)
        : alert('Error in operate function');
    return solve;
}

function operateValues(displayArray) {
    if (displayArray.length < 3) {
        alert('Please use at least two numbers with a valid operator');
        return;
    }
    let firstValue = displayArray[0];
    let operand = displayArray[1];
    let secondValue = displayArray[2];
    let finalValue = operate(firstValue, secondValue, operand);
    finalValue = +finalValue.toFixed(2);
    //if (displayArray.length <= 4) {
    //    return finalValue;
    //}
    /*
    for (i = 2; i < (displayArray.length - 2); i++) {
        firstValue = finalValue;
        operand = displayArray[i+1];
        secondValue = displayArray[i+2];
        finalValue = operate(firstValue, secondValue, operand);
        i++;
    }
    */
    return finalValue;
}

function convertArray(array) {
    let arrayString = '';
    for (i = 0; i < array.length; i++) {
        arrayString += array[i];
    }
    console.log(arrayString);
    return arrayString;
}


const displaySelector = document.querySelector('.display');

const buttons = document.querySelectorAll('[id]');
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        buttonClicked(this.id);
    });
};

let display = '';
let solution = 'empty';
const displayArray = [];

function buttonClicked(id) { 
    let loopLength = displayArray.length;
    switch (id) {
        //case 'backspace':
        
        //    break;

        case 'clear':
            loopLength = displayArray.length;
            for (i = 0; i < loopLength; i++) {
                displayArray.pop();
            }
            display = '';
            solution = 'empty';
            displaySelector.textContent = '0';
            break;

        case 'seven':
            display += `7`;
            if (displayArray.length) {
                displaySelector.textContent = convertArray(displayArray) + display;
            }
            else {
                displaySelector.textContent = display;
            }
            break;

        case 'eight':
            display += `8`
            if (displayArray.length) {
                displaySelector.textContent = convertArray(displayArray) + display;
            }
            else {
                displaySelector.textContent = display;
            }
            break;

        case 'nine':
            display += `9`
            if (displayArray.length) {
                displaySelector.textContent = convertArray(displayArray) + display;
            }
            else {
                displaySelector.textContent = display;
            }
            break;

        case 'divide':
            if (solution != 'empty') {
                displayArray.push(solution);
                display = solution;
            }
            if (display == '') {
                return;
            }
            
            if (display != solution) {
                displayArray.push(display);
            }
            solution = 'empty';
            if (displayArray.length >= 3) {
                solution = buttonClicked('autoEqual');
                displayArray.push(solution);
                solution = 'empty';
            }
            displayArray.push('/');
            displaySelector.textContent = convertArray(displayArray);
            display = '';
            break;

        case 'four':
            display += `4`
            if (displayArray.length) {
                displaySelector.textContent = convertArray(displayArray) + display;
            }
            else {
                displaySelector.textContent = display;
            }
            break;

        case 'five':
            display += `5`
            if (displayArray.length) {
                displaySelector.textContent = convertArray(displayArray) + display;
            }
            else {
                displaySelector.textContent = display;
            }
            break;

        case 'six':
            display += `6`
            if (displayArray.length) {
                displaySelector.textContent = convertArray(displayArray) + display;
            }
            else {
                displaySelector.textContent = display;
            }
            break;

        case 'multiply':
            if (solution != 'empty') {
                displayArray.push(solution);
                display = solution;
            }
            if (display == '') {
                return;
            }
            
            if (display != solution) {
                displayArray.push(display);
            }
            solution = 'empty';
            if (displayArray.length >= 3) {
                solution = buttonClicked('autoEqual');
                displayArray.push(solution);
                solution = 'empty';
            }
            displayArray.push('*');
            displaySelector.textContent = convertArray(displayArray);
            display = '';
            break;

        case 'one':
            display += `1`
            if (displayArray.length) {
                displaySelector.textContent = convertArray(displayArray) + display;
            }
            else {
                displaySelector.textContent = display;
            }
            break;

        case 'two':
            display += `2`
            if (displayArray.length) {
                displaySelector.textContent = convertArray(displayArray) + display;
            }
            else {
                displaySelector.textContent = display;
            }
            break;

        case 'three':
            display += `3`
            if (displayArray.length) {
                displaySelector.textContent = convertArray(displayArray) + display;
            }
            else {
                displaySelector.textContent = display;
            }
            break;

        case 'subtract':
            console.log(displayArray.length);
            if (solution != 'empty') {
                displayArray.push(solution);
                display = solution;
            }
            if (display == '') {
                return;
            }
            
            if (display != solution) {
                displayArray.push(display);
            }
            solution = 'empty';
            // new code start
            if (displayArray.length >= 3) {
                solution = buttonClicked('autoEqual');
                displayArray.push(solution);
                solution = 'empty';
            }
            // new code end
            displayArray.push('-');
            displaySelector.textContent = convertArray(displayArray);
            display = '';
            break;

        case 'zero':
            display += `0`
            if (displayArray.length) {
                displaySelector.textContent = convertArray(displayArray) + display;
            }
            else {
                displaySelector.textContent = display;
            }
            break;

        //case 'decimal':

        //    break;

        case 'equal':
            if (display == '') {
                alert('Please enter a valid math operation')
                return;
            }
            displayArray.push(display);
            solution = operateValues(displayArray);
            display = solution;
            displaySelector.textContent = solution;
            loopLength = displayArray.length;
            for (i = 0; i < loopLength; i++) {
                displayArray.pop();
            }
            break;

        case 'autoEqual':
            //if (display == '') {
            //    return;
            //}
            solution = operateValues(displayArray);
            display = solution;
            displaySelector.textContent = solution;
            loopLength = displayArray.length;
            for (i = 0; i < loopLength; i++) {
                displayArray.pop();
            }
            return solution;
        
        case 'add':
            if (solution != 'empty') {
                displayArray.push(solution);
                display = solution;
                console.log('display != empty', display);
            }
            if (display == '') {
                return;
            }
            
            if (display != solution) {
                displayArray.push(display);
                console.log('display != solution', display);
            }
            solution = 'empty';
            if (displayArray.length >= 3) {
                solution = buttonClicked('autoEqual');
                displayArray.push(solution);
                solution = 'empty';
            }
            displayArray.push('+');
            console.log('displayArray', displayArray);
            displaySelector.textContent = convertArray(displayArray);
            console.log('displaySelector', displaySelector.textContent);
            display = '';
            break;

        default:
            console.log('Error in buttonClicked function: ', id);  
    }
}

