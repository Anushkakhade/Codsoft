const display = document.getElementById('result');
const buttons = document.querySelectorAll('.number, .operator');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const calculateButton = document.getElementById('calculate');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    });
});

clearButton.addEventListener('click', () => {
    display.value = '';
});

backspaceButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});

calculateButton.addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
});
