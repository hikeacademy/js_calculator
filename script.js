document.getElementById("calculate-button").onclick = function() {
    var operation = document.getElementById("result");
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


/*
function showDate() {
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
}

function countDown() {
    var day = document.getElementById("day").innerHTML;
    var newVal = day - 1;
    document.getElementById("day").innerHTML = newVal;
}
*/