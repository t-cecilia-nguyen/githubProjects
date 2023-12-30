document.addEventListener('DOMContentLoaded', function () {
    // Selectors
    var calc_display = document.getElementById('calc_display');
    var calc_answer = document.getElementById('calc_answer');
    var all_clear_button = document.querySelector('.all_clear');
    var clear_button = document.querySelector('.clear');
    var pos_neg_button = document.querySelector('.pos_neg');
    var number_buttons = document.querySelectorAll('.number');
    var operator_buttons = document.querySelectorAll('.operator');
    var decimal_button = document.querySelector('.decimal');
    var equal_button = document.querySelector('.equal');

    // Button AC
    all_clear_button.addEventListener('click', clearAll);
    // Button C
    clear_button.addEventListener('click', clearLast);
    // Button +/-
    pos_neg_button.addEventListener('click', posNeg);
    // Button numbers
    number_buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (calc_display.textContent === "0") {
                calc_display.textContent = "";
            }
            var current_number = calc_display.textContent;
            var split_number = current_number.split(/[-+x/]/);
            var latest_number = split_number[split_number.length - 1];
            // Check length < 8
            if (checkDigitLength(latest_number)) {
                // Check if contains decimal
                if (latest_number.includes('.')) {
                    var split_decimal = latest_number.split('.');
                    // Check 3 decimal places
                    var latest_decimal_number = split_decimal[split_decimal.length - 1];
                    if (latest_decimal_number.length < 3) {
                        calc_display.textContent += button.textContent;
                    }
                } else {
                    calc_display.textContent += button.textContent;
                }
            }

            // SCROLL BAR
            calc_display.scrollLeft = calc_display.scrollWidth;

            if (calc_display.textContent != "") {
                let new_display = calc_display.textContent.replace(/[x]/g, "*");
                try {
                    var result = new Function('return ' + new_display) ();
                    calc_answer.textContent = parseFloat(result.toFixed(3));
                } catch (error) {
                    calc_display.textContent = "ERR";
                }
            }            
        });
    });
    // Button operators
    operator_buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Add operator
            if (isNumber(calc_display.textContent)) {
            calc_display.textContent += button.textContent;
            }
            // Replace last operator
            if (isOperator(calc_display.textContent)) {
                calc_display.textContent = calc_display.textContent.slice(0, -1);
                calc_display.textContent += button.textContent;
            }
        })
    })
    // Button .
    decimal_button.addEventListener('click', addDecimal);
    // Button =
    equal_button.addEventListener('click', calculateResult);

    

    // Functions
    function isNumber(value) {
        var lastChar = value.charAt(value.length - 1);
        return !isNaN(lastChar);
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

    function posNeg() {
        if (calc_display.textContent >= 0) {
            calc_display.textContent = parseFloat(calc_display.textContent) - calc_display.textContent * 2;
        } else {
            calc_display.textContent = parseFloat(calc_display.textContent) + calc_display.textContent * -2;
        }
    }

    function addDecimal() {
        var current_number = calc_display.textContent;
        var split_number = current_number.split(/[-+x/]/);
        var latest_number = split_number[split_number.length - 1];
        // Check if digits < 8
        if (checkDigitLength(latest_number)){
            var lastChar = calc_display.textContent.charAt(calc_display.textContent.length - 1);
            if (lastChar != '.') {
                calc_display.textContent += '.';
            }
        }
    }

    function calculateResult() {
        let new_display = calc_display.textContent.replace(/[x]/g, "*");
        try {
            var result = new Function('return ' + new_display) ();
            calc_display.textContent = parseFloat(result.toFixed(3));
            calc_answer.textContent = '\u00A0';
        } catch (error) {
            calc_display.textContent = "ERR";
        }
    }

    function checkDigitLength(value) {
        newValue = value.replace('.', '');
        return newValue.length < 8;
    }
    
});