const writingParagraphZero = document.getElementById('writingZero')!;
const writingParagraphOne = document.getElementById('writingOne')!;
let operandZero = "";
let operandOne = "";
let operator = "";
let stringArray: string[] = [];

function checkIfNumber(val: string) {
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

function checkIfSymbol(val: string) {
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

function calculateFinalResult(num1: number, num2: number): string {
    let ans: string;
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

function AC(): void {
    writingParagraphZero.innerHTML = "";
    writingParagraphOne.innerHTML = "";
}

function writeOnScreen(buttonInfo: any) {
    if (buttonInfo === 'AC') {
        AC();
    } else if (buttonInfo === '=') {
        if (writingParagraphZero.innerHTML !== "") {
            operator = writingParagraphZero.innerHTML.split(" ")[1];
            let result = calculateFinalResult(+(writingParagraphZero.innerHTML.split(" ")[0]), +writingParagraphOne.innerHTML);
            AC();
            writingParagraphOne.innerHTML = result;
        }
    } else if (checkIfSymbol(buttonInfo)) {
        writingParagraphZero.innerHTML = writingParagraphOne.innerHTML + " " + buttonInfo;
        writingParagraphOne.innerHTML = "";
    } else if (checkIfNumber(buttonInfo)) {
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