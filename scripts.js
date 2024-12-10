
const buttons = document.querySelectorAll(".basic-opera, .basic-opera-special");
const display = document.querySelector(".display p");

let currentInput = "";
let operation = "";
let firstNumber = null;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (!isNaN(value) || value === ".") {
            currentInput += value;
            display.textContent = currentInput;
        } else if (value === "C") {
            currentInput = "";
            operation = "";
            firstNumber = null;
            display.textContent = "|";
        } else if (value === "=") {
            if (firstNumber !== null && operation) {
                const result = calculate(firstNumber, parseFloat(currentInput), operation);
                display.textContent = result;
                currentInput = result.toString();
                firstNumber = null;
                operation = "";
            }
        } else {
            if (currentInput) {
                if (firstNumber === null) {
                    firstNumber = parseFloat(currentInput);
                } else if (operation) {
                    firstNumber = calculate(firstNumber, parseFloat(currentInput), operation);
                }
                operation = value;
                currentInput = "";
                display.textContent = "|";
            }
        }
    });
});

function calculate(num1, num2, op) {
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "X":
            return num1 * num2;
        case "/":
            return num1 / num2;
        case "%":
            return num1 % num2;
        default:
            return num2;
    }
}
 