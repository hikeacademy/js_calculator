document.getElementById('calculate-button').onclick = function() {
    // Get numbers we'll use for calculations.
    let num1 = parseInt(document.getElementById('elem-1').value);
    let num2 = parseInt(document.getElementById('elem-2').value);

    if(isNaN(num1)) {
        // Case in which first input was empty
        alert('Digite valores nas caixas!');
        document.getElementById('elem-1').focus();
    } else if(isNaN(num2)) {
        // Case in which second input was empty
        alert('Digite valores nas caixas!');
        document.getElementById('elem-2').focus();
    } else {
        // Get chosen operation
        let choice = document.querySelector('input[name="operation"]:checked');
        let operation = choice.value;

        // Calculate and display result
        let result = getResult(num1, num2, operation);
        document.getElementById('result').innerHTML = result;
    }
}

/**
 * Returns the result of an operation over two numbers.
 * Arguments: two valid numbers and one operation symbol.
 * Supports sum, subtraction, multiplication and division.
 */
function getResult(num1, num2, symbol) {
    if(symbol === '+') {
        return num1 + num2;
    } else if (symbol === '-') {
        return num1 - num2;
    } else if (symbol === '*') {
        return num1 * num2;
    } else if (symbol === '/') {
        return num1 / num2;
    }
}
