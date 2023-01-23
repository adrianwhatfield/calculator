// Maths functions
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operator;
let displayArr = [];
let displayStr = "";

let a;
let b;

const displayElement = document.getElementById("display");

// All event listeners
document.getElementById("one").addEventListener("click", inputNum);
document.getElementById("two").addEventListener("click", inputNum);
document.getElementById("three").addEventListener("click", inputNum);
document.getElementById("four").addEventListener("click", inputNum);
document.getElementById("five").addEventListener("click", inputNum);
document.getElementById("six").addEventListener("click", inputNum);
document.getElementById("seven").addEventListener("click", inputNum);
document.getElementById("eight").addEventListener("click", inputNum);
document.getElementById("nine").addEventListener("click", inputNum);
document.getElementById("zero").addEventListener("click", inputNum);

document.getElementById("add").addEventListener("click", inputOperator);
document.getElementById("subtract").addEventListener("click", inputOperator);
document.getElementById("multiply").addEventListener("click", inputOperator);
document.getElementById("divide").addEventListener("click", inputOperator);
document.getElementById("equals").addEventListener("click", inputEquals);

document.getElementById("decimal").addEventListener("click", inputNum);
document.getElementById("clear").addEventListener("click", inputClear);

// Display the argument
function display(num) {
    displayElement.innerHTML = num;
};

// Assigns a's value and the correct operator
function inputOperator(event) {
    let id = event.target.id;

    a = parseFloat(displayStr);

    if (id == "add") {
        operator = "add";
        displayArr = [];
        displayStr = "";
        display("+");
    } else if (id == "subtract") {
        operator = "subtract";
        displayArr = [];
        displayStr = "";
        display("-");
    } else if (id == "multiply") {
        operator = "multiply";
        displayArr = [];
        displayStr = "";
        display("*");
    } else if (id == "divide") {
        operator = "divide";
        displayArr = [];
        displayStr = "";
        display("/");
    };
};

// Calls the correct maths functions and assigns b's value
function operate() {
    b = parseFloat(displayStr);

    if (operator == "add") {
        return add(a, b);
    } else if (operator == "subtract") {
        return subtract(a, b);
    } else if (operator == "multiply") {
        return multiply(a, b);
    } else if (operator == "divide") {
        return divide(a, b);
    };
};

// Clears all data
function inputClear() {
    displayArr = [];
    displayStr = "";
    a = undefined;
    b = undefined;
    operator = "";
    display(displayStr);
};

// Pushes number to array and displays it
function inputNum(event, num) {
    let id = event.target.id;

    if (id == "one") {
        num = 1;
        displayArr.push(num);
        displayStr = displayArr.join("");
        display(displayStr);
    } else if (id == "two") {
        num = 2;
        displayArr.push(num);
        displayStr = displayArr.join("");
        display(displayStr);
    } else if (id == "three") {
        num = 3;
        displayArr.push(num);
        displayStr = displayArr.join("");
        display(displayStr);
    } else if (id == "four") {
        num = 4;
        displayArr.push(num);
        displayStr = displayArr.join("");
        display(displayStr);
    } else if (id == "five") {
        num = 5;
        displayArr.push(num);
        displayStr = displayArr.join("");
        display(displayStr);
    } else if (id == "six") {
        num = 6;
        displayArr.push(num);
        displayStr = displayArr.join("");
        display(displayStr);
    } else if (id == "seven") {
        num = 7;
        displayArr.push(num);
        displayStr = displayArr.join("");
        display(displayStr);
    } else if (id == "eight") {
        num = 8;
        displayArr.push(num);
        displayStr = displayArr.join("");
        display(displayStr);
    } else if (id == "nine") {
        num = 9;
        displayArr.push(num);
        displayStr = displayArr.join("");
        display(displayStr);
    } else if (id == "zero") {
        num = 0;
        displayArr.push(num);
        displayStr = displayArr.join("");
        display(displayStr);
    } else if (id == "decimal") {
        num = ".";
        displayArr.push(num);
        displayStr = displayArr.join("");
        display(displayStr);
    };
};

// Displays the result and clears data
function inputEquals() {
    display(operate());

    displayArr = [];
    displayStr = operate();
    a = undefined;
    b = undefined;
    operator = "";
};