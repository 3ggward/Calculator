var displayText;
var displayVal;
var num1;
var num2;
var op;
var firstTime;

window.addEventListener("DOMContentLoaded", () => { 
    let button;
    firstTime = true;
    displayText = document.querySelector("p")
    displayVal = "0";
    updateDisplay();

    // initialize numButton onclicks
    for (i = 0; i < 10; i++) {
        let text = i.toString();
        button = document.getElementById(text);
        button.onclick = () => numInput(text);
    }

    // initialize opbuttons

    button = document.getElementById("+");
    button.onclick = () => opInput("+");

    button = document.getElementById("-");
    button.onclick = () => opInput("-");

    button = document.getElementById("*");
    button.onclick = () => opInput("*");

    button = document.getElementById("/");
    button.onclick = () => opInput("/");

    button = document.getElementById("ce");
    button.onclick = () => clearDisplay();

    button = document.getElementById("=");
    button.onclick = () => operate(op, num1, num2);
});

function operate() {
    if (num2 == null) {
        switch (op) {
            case "+":
                num1 = add(num1, num1);
                break;
            case "-":
                num1 = sub(num1, num1);
                break;
            case "*":
                num1 = mul(num1, num1);
                break;
            case "/":
                num1 = div(num1, num1);
                break;
        }
    } else {
        switch (op) {
            case "+":
                num1 = add(num1, num2);
                break;
            case "-":
                num1 = sub(num1, num2);
                break;
            case "*":
                num1 = mul(num1, num2);
                break;
            case "/":
                num1 = div(num1, num2);
                break;
        }
    }

    if (num1 > 999999999) {
        num1 = "NaN";
    }

    displayVal = num1;
    num2 = null;
    op = null;
    firstTime = false;
    updateDisplay();
    console.log(num1);
    console.log(num2);
    console.log(op);
    console.log(displayVal);
}

function add(num1, num2) {
    let int1 = parseInt(num1);
    let int2 = parseInt(num2);
    let result = int1 + int2;
    return result.toString();
}

function sub(num1, num2) {
    let int1 = parseInt(num1);
    let int2 = parseInt(num2);
    let result = int1 - int2;
    return result.toString();
}

function mul(num1, num2) {
    let int1 = parseInt(num1);
    let int2 = parseInt(num2);
    let result = int1 * int2;
    return result.toString();
}

function div(num1, num2) {
    let int1 = parseInt(num1);
    let int2 = parseInt(num2);
    let result = int1 / int2;
    return result.toString();
}

function numInput(input) {
    if (num1 == null || num1 == "0") {
        num1 = input;
        displayVal = num1;
        updateDisplay();
    } else if (op == null && firstTime == true) {
        if (num1.length < 9) {
            num1 = num1 + input;
            displayVal = num1;
            updateDisplay();
        }
    } else if (op == null && firstTime == false) {
        num1 = input;
        displayVal = num1;
        firstTime = true;
        updateDisplay();
    } else if (num2 == null) {
        num2 = input;
        displayVal = num2;
        updateDisplay();
    } else {
        if (num2.length < 9) {
            num2 = num2 + input;
            displayVal = num2;
            updateDisplay();
        }
    }

    console.log(input);
    console.log(num1);
    console.log(num2);
    console.log(op);
    console.log(displayVal);
}

function opInput(input) {
    if (op == null) {
        op = input;
    } else {
        operate();
        op = input;
    }
}

function updateDisplay() {
    displayText.textContent = displayVal;
}

function clearDisplay() {
    num1 = null;
    num2 = null;
    op = null;
    displayVal = "0";
    updateDisplay();
}