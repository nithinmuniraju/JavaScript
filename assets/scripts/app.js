const defaultInputValue = 0;
let currentInput = defaultInputValue;
const logger = [];

// Additional function to get userInputValue

function getUserInputValue(){
    return parseInt(userInput.value);
}
function readWriteOutput(operator, previousNumber, nextEnteredNumber) {
    const valuesEntred = `${previousNumber} ${operator} ${nextEnteredNumber}`;
    outputResult(currentInput, valuesEntred);
}

// Write to logger
function writeToLog(method, previousValue, enteredValue, finalResult){
    const logMethod = {
        "Method" : method,
        "previousValue" : previousValue,
        "enteredValue" : enteredValue,
        "result" : finalResult
    }
    //Push into array
    logger.push(logMethod);
    console.log('Log', logger);
}

function calculateResult(operation){
    const userInputValue = getUserInputValue();
    // [ ! ] ==> return true only on [0, "", NULL, Undefined, NAN]
    // return FALSE on no match
    if(operation !== "ADD" && operation !== "SUB" && operation !== "MULTIPLY" && operation !== "DIVIDE" || !userInputValue){
        return;
    }

    const preResult = currentInput;
    let operator;
    if(operation === "ADD"){
        operator = "+"
        currentInput += userInputValue;
    } else if(operation === "SUB") {
        operator = "-"
        currentInput -= userInputValue;
    } else if(operation === "MULTIPLY") {
        operator = "*"
        currentInput *= userInputValue;
    } else {
        operator = "/"
        currentInput /= userInputValue;
    }
    
    readWriteOutput(operator, preResult, userInputValue);
    writeToLog(operation, preResult, userInputValue, currentInput);
}
function add() {
    // const userInputValue = getUserInputValue();
    // const preResult = currentInput;
    // currentInput += userInputValue;
    // readWriteOutput('+', preResult, userInputValue);
    // userInput.value = '';
    // console.log('HIT', preResult);
    // writeToLog('ADD', preResult, userInputValue, currentInput); // Logger
    // currentInput = currentInput + userInputValue;
    // const valuesEntred = `${currentInput} + ${userInputValue}`;
    // outputResult(currentInput, valuesEntred);
    calculateResult('ADD');
    userInput.value = '';
}

function subtract() {
    calculateResult('SUB');
    userInput.value = '';
}

function multiply() {
    calculateResult('MULTIPLY');
    userInput.value = '';
}

function divide() {
    calculateResult('DIVIDE');
    userInput.value = '';
}
/* 
Add event listener for the add button 
Add event listerner listens for the events mentioned in first parameter
*/
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);