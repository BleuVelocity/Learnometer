
function saveAndProcess() {
    var userInput1 = Number(document.getElementById("inputBox1").value);
    var userInput2 = Number(document.getElementById("inputBox2").value);
    var operation = document.getElementById("operation").value;
    var result;

    if (operation === "+") {
        result = userInput1 + userInput2;
    } else if (operation === "-") {
        result = userInput1 - userInput2;
    } else if (operation === "*") {
        result = userInput1 * userInput2;
    } else if (operation === "/") {
        result = userInput2 !== 0 ? userInput1 / userInput2 : "Cannot divide by zero";
    } else {
        result = "Please select an operation.";
    }

    alert("Answer: " + result);
}

function goHome() {
    window.location.href = "mainPage.html";
}
