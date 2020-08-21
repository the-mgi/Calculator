var writingParagraphZero = document.getElementById('writingZero');
var writingParagraphOne = document.getElementById('writingOne');
var operandZero = "";
var operandOne = "";
var operator = "";
var stringArray = [];
function checkIfNumber(val) {
    switch (val) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
            return true;
        default:
            return false;
    }
}
function checkIfSymbol(val) {
    switch (val) {
        case '+':
        case '-':
        case 'x':
        case '/':
            return true;
        default:
            return false;
    }
}
function calculateFinalResult(num1, num2) {
    var ans;
    switch (operator) {
        case '+':
            return (num1 + num2).toString();
        case '-':
            return (num1 - num2).toString();
        case 'x':
            return (num1 * num2).toString();
        case '/':
            return (num1 / num2).toString();
        default:
            return "";
    }
}
function AC() {
    writingParagraphZero.innerHTML = "";
    writingParagraphOne.innerHTML = "";
}
function writeOnScreen(buttonInfo) {
    if (buttonInfo === 'AC') {
        AC();
    }
    else if (buttonInfo === '=') {
        if (writingParagraphZero.innerHTML !== "") {
            operator = writingParagraphZero.innerHTML.split(" ")[1];
            var result = calculateFinalResult(+(writingParagraphZero.innerHTML.split(" ")[0]), +writingParagraphOne.innerHTML);
            AC();
            writingParagraphOne.innerHTML = result;
        }
    }
    else if (checkIfSymbol(buttonInfo)) {
        writingParagraphZero.innerHTML = writingParagraphOne.innerHTML + " " + buttonInfo;
        writingParagraphOne.innerHTML = "";
    }
    else if (checkIfNumber(buttonInfo)) {
        writingParagraphOne.innerHTML = writingParagraphOne.innerHTML + buttonInfo;
    }
    // if (checkIfNumber(buttonInfo)) {
    //     writingParagraphOne.innerHTML = writingParagraphOne.innerHTML + buttonInfo;
    //     operandZero = operandZero + buttonInfo;
    //     console.log(operandZero);
    // } else if (checkIfSymbol(buttonInfo) && operandZero !== "undefined") {
    //     writingParagraphZero.innerHTML = writingParagraphOne.innerHTML + " " +buttonInfo;
    //     writingParagraphOne.innerHTML = "";
    //     operator = buttonInfo;
    // } else if (buttonInfo === "=") {
    //     let result = calculateFinalResult(+operandZero, +operandOne);
    // } else if (buttonInfo === "AC") {
    //     writingParagraphOne.innerHTML = "";
    //     writingParagraphZero.innerHTML = "";
    // }
}
