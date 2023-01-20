let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operator = "add";
let displayArr = [];
let displayStr = "";

const displayElement = document.getElementById("display");

function display(num) {
    displayElement.innerHTML = num;
};

function operate(a, b) {
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

function inputNum(event, num) {
    let id = event.target.id;

    if (id == "one") {
        num = 1;
    } else if (id == "two") {
        num = 2;
    } else if (id == "three") {
        num = 3;
    } else if (id == "four") {
        num = 4;
    } else if (id == "five") {
        num = 5;
    } else if (id == "six") {
        num = 6;
    } else if (id == "seven") {
        num = 7;
    } else if (id == "eight") {
        num = 8;
    } else if (id == "nine") {
        num = 9;
    } else if (id == "zero") {
        num = 0;
    };

    displayArr.push(num);
    displayStr = displayArr.join("");
    display(displayStr);
};