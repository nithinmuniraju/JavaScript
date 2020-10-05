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
function add() {
    const userInputValue = getUserInputValue();
    const preResult = currentInput;
    currentInput += userInputValue;
    readWriteOutput('+', preResult, userInputValue);
    userInput.value = '';
    console.log('HIT', preResult);
    writeToLog('ADD', preResult, userInputValue, currentInput); // Logger
    // currentInput = currentInput + userInputValue;
    // const valuesEntred = `${currentInput} + ${userInputValue}`;
    // outputResult(currentInput, valuesEntred);
}

function subtract() {
    const userInputValue = getUserInputValue();
    const preResult = currentInput;
    currentInput -= userInputValue;
    readWriteOutput('-', preResult, userInputValue);
    userInput.value = '';
    writeToLog('SUB', preResult, userInputValue, currentInput); // Logger
    // currentInput = currentInput - userInputValue;
}

function multiply() {
    const userInputValue = getUserInputValue();
    const preResult = currentInput;
    currentInput *= userInputValue;
    readWriteOutput('*', preResult, userInputValue);
    userInput.value = '';
    writeToLog('MULTI', preResult, userInputValue, currentInput); // Logger
    // currentInput = currentInput * userInputValue;
}

function divide() {
    const userInputValue = getUserInputValue();
    const preResult = currentInput;
    currentInput /=  userInputValue;
    readWriteOutput('/', preResult, userInputValue);
    userInput.value = '';
    writeToLog('DIV', preResult, userInputValue, currentInput); // Logger
    // currentInput = currentInput / userInputValue;
}
/* 
Add event listener for the add button 
Add event listerner listens for the events mentioned in first parameter
*/
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);