const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const operate = function (op, a, b) {
    if (op === '+') {
        return add (a, b);
    } else if (op === '-') {
        return subtract (a, b);
    } else if (op === '*') {
        return multiply (a, b);
    } else if (op === '/') {
        return divide (a, b);
    } else {
        return 'INVALID OPERATOR';
    }
}

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.normal');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
})});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = '';
})

const equal = document.querySelector('#equals');
equal.addEventListener('click', )