var input = document.getElementById('ourinput');
var button = document.querySelector('button');
var result = document.getElementById('result')

function checkInput() {
    var val = input.value;
    if(typeof val == "string") {
        if(val.length == 0) {
            result.innerText = "Input is blank!";
        } else {
            result.innerText = "Input is good!";
        }
    } else {
        result.innerText = "Input is not a string!";
    }
}

button.addEventListener('click', checkInput);