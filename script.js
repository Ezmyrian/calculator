function add(a, b) {
    let add = a + b;
    console.log(add);
}

function subtract(a, b) {
    let subtract = a - b;
    console.log(subtract);
}

function multiply(a, b) {
    let multiple = a * b;
    console.log(multiple);
}

function divide(a, b) {
    if (b == 0) {
        alert('Your attempt to divide by 0 has caused a black hole that has devoured the universe and everyone in it.  Please refrain from further universe destruction.');
        return;
    }
    division = a / b;
    console.log(division);
}

function operate(num1, num2, operator) {
    let solution = (operator == '*') ? multiply(num1, num2)
        : (operator == '/') ? divide(num1, num2)
        : (operator == '+') ? add(num1, num2)
        : (operator == '-') ? subtract(num1, num2)
        : alert('Error in operate function');
    return solution;
}

