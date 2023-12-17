function clearErrorMsg() {
    var errorMsg = document.getElementById("errorMsg");
    errorMsg.textContent = "";
    var answer = document.getElementById("answer");
    answer.textContent = "";
}

function checkDigits() {
    var binaryString = document.getElementById("binary").value;
    for(let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] != '0' && binaryString[i] != '1') {
            errorMsg.textContent = "Error: Not a binary number! Please enter only 0's or 1's.";
            return false;
        }
    }
    return true;
}

function checkLength() {
    var binaryString = document.getElementById("binary").value;
    if (binaryString.length > 8) {
        var errorMsg = document.getElementById("errorMsg");
        errorMsg.textContent = "Error: Length must be maximum 8 digits!"
        return false;
    }
    return true;
}

function calcDecimal() {
    var binaryString = document.getElementById("binary").value;

    if (binaryString == "") {
        return "";
    }
    
    var sum = 0;
    var counter = 0;
    for (let i = binaryString.length - 1; i >= 0; i-- ) {
        var j = binaryString[i] - '0';
        sum += j * 2 ** counter;
        counter++;
    }
    var answer = document.getElementById("answer");
    answer.textContent = sum;
}