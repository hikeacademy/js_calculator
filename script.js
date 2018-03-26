document.getElementById("calculate-button").onclick = function() {
    // var operation = document.getElementById("operation");
    var operation = document.querySelector('input[name="operation"]:checked');
    console.log(operation);
    var symbol = operation.value;

    var num1 = parseInt(document.getElementById("elem-1").value);
    var num2 = parseInt(document.getElementById("elem-2").value);

    var result = getResult(num1, num2, symbol);

    document.getElementById("result").innerHTML = result;
}

function getResult(num1, num2, symbol) {
    if(symbol === "+") {
        return num1 + num2;
    } else if (symbol === "-") {
        return num1 - num2;
    } else if (symbol === "*") {
        return num1 * num2;
    } else if (symbol === "/") {
        return num1 / num2;
    }
}
