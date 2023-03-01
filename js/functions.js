function getInputValueByID(inputID) {
    const inputIDCatcher = document.getElementById(inputID);
    const inputIDString = inputIDCatcher.value;
    const inputIDFloat = parseFloat(inputIDString);
    return inputIDFloat;
}

function getTextValueByID(inputID) {
    const inputIDCatcher = document.getElementById(inputID);
    const inputIDString = inputIDCatcher.innerText;
    const inputIDFloat = parseFloat(inputIDString);
    return inputIDFloat;
}

function setValueByID(inputID, newValue) {
    const inputIDCatcher = document.getElementById(inputID);
    inputIDCatcher.innerText = newValue;
}

function setButtonResetInput(inputID) {
    const inputIDCatcher = document.getElementById(inputID);
    inputIDCatcher.value = "";

}
function setButtonResetText(inputID) {
    const inputIDCatcher = document.getElementById(inputID);
    inputIDCatcher.innerText = "00";
}