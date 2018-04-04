const colors = ['#1abc9c', '#e74c3c', '#8e44ad', '#f39c12', '#f1c40f'];

document.getElementById("calculate-button").onclick = function() {
    var num1 = parseInt(document.getElementById("elem-1").value);
    var num2 = parseInt(document.getElementById("elem-2").value);

    if(isNaN(num1)) {
        alert("Digite valores nas caixas!");
        document.getElementById("elem-1").focus();
    } else if(isNaN(num2)) {
        alert("Digite valores nas caixas!");
        document.getElementById("elem-2").focus();
    } else {
        var choice = document.querySelector('input[name="operation"]:checked');
        var operation = choice.value;
        var result = getResult(num1, num2, operation);

        document.getElementById("result").innerHTML = result;
    }

    // if(isNaN(num1) || isNaN(num2)) {
    //     $("#calculate-button" ).effect( "shake", {times: 5}, 650);
    // } else {
    //     var choice = document.querySelector('input[name="operation"]:checked');
    //     var operation = choice.value;
    //     var result = getResult(num1, num2, operation);
    //     debugger;

    //     console.log(num1);
    //     console.log(num2);
    //     console.log(result);
    //     console.log(operation);

    //     document.getElementById("result").innerHTML = result;
    // }
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
