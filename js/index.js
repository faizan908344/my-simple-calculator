function clearAllBtn() {
    document.getElementById("inputText").value = " ";
}

function numberInputKey(value) {
    document.getElementById("inputText").value += value; 
}

function calculateResult() {
    document.getElementById("inputText").value = eval(document.getElementById("inputText").value);
}

function deleteBtn() {
    document.getElementById("inputText").value = document.getElementById("inputText").value.slice(0, -1);
}