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

function display(num) {
    displayElement.innerHTML = num;
};


function inputOperator(event) {
    let id = event.target.id;

    a = parseFloat(displayStr);

    if (id == "add") {
        operator = "add";
        displayArr = [];
        displayStr = "";
        display("+");
        console.log(operator);
    } else if (id == "subtract") {
        operator = "subtract";
        displayArr = [];
        displayStr = "";
        display("-");
        console.log(operator);
    } else if (id == "multiply") {
        operator = "multiply";
        displayArr = [];
        displayStr = "";
        display("*");
        console.log(operator);
    } else if (id == "divide") {
        operator = "divide";
        displayArr = [];
        displayStr = "";
        display("/");
        console.log(operator);
    };
};

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

function inputClear() {
    displayArr = [];
    displayStr = "";
    a = undefined;
    b = undefined;
    operator = "";
    display(displayStr);
};

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

function inputEquals() {
    console.log("=")
    display(operate());

    displayArr = [];
    displayStr = operate();
    a = undefined;
    b = undefined;
    operator = "";
};