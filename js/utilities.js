function getInputFieldValueById(inputId) {
    const inputFiled = document.getElementById(inputId);
    const inputFieldValueString = inputFiled.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputFiled.value = '';
    return inputFieldValue;
}

function getTextElementValueById(elementId) {

    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementvalue = parseFloat(textElementValueString);
    return textElementvalue;

}

function setTextElementValueById(element, newValue) {
    const textElement = document.getElementById(element);
    textElement.innerText = newValue;
}
