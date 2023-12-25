document.addEventListener('DOMContentLoaded', function () {
    var calc_display = document.getElementById('calc_display');
    var number_buttons = document.querySelectorAll('.number');
    var decimal_button = document.querySelector('.decimal');
    var operator_buttons = document.querySelectorAll('.operator');
    var all_clear_button = document.querySelector('.all_clear');
    var clear_button = document.querySelector('.clear');
    var equal_button = document.querySelector('.equal');

    number_buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (calc_display.textContent === "0") {
                calc_display.textContent = "";
            }
            calc_display.textContent += button.textContent;
        });
    });

    decimal_button.addEventListener('click', addDecimal);

    operator_buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (isNumber(calc_display.textContent)) {
            calc_display.textContent += button.textContent;
            }
            if (isOperator(calc_display.textContent)) {
                calc_display.textContent = calc_display.textContent.slice(0, -1);
                calc_display.textContent += button.textContent;
            }
        })
    })

    all_clear_button.addEventListener('click', clearAll);
    clear_button.addEventListener('click', clearLast);
    equal_button.addEventListener('click', calculateDisplay);

function isNumber(value) {
    var lastChar = value.charAt(value.length - 1);
    return !isNaN(lastChar);
}

function addDecimal() {
    var lastChar = calc_display.textContent.charAt(calc_display.textContent.length - 1);
    if (lastChar != '.') {
        calc_display.textContent += '.';
    }
}

function isOperator(value) {
    var operators = ['+', '-', 'x', '/'];
    var lastChar = value.charAt(value.length - 1);
    return operators.includes(lastChar);
}

function clearAll() {
    calc_display.textContent = '0';
}

function clearLast() {
    calc_display.textContent = calc_display.textContent.slice(0, -1);
    if (calc_display.textContent.length === 0) {
        calc_display.textContent = '0';
    }
}

function calculateDisplay () {
    let new_display = calc_display.textContent.replace(/[x]/g, "*");
    try {
        var result = new Function('return ' + new_display) ();
        calc_display.textContent = result;
    } catch (error) {
        calc_display.textContent = 'Error';
    }
}
    
});