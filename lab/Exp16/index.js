window.onload = () => {
    var contentDiv = document.getElementById('content');
    var timerSpan = document.getElementById('timer_span');
    var val = parseInt(timerSpan.innerText);

    var intervalEle = setInterval(() => {
        console.log(val);
        val++;
        timerSpan.innerText = val;
        if(val == 5) {
            clearInterval(intervalEle);
        }
    }, 1000);

    setTimeout(() => {
        contentDiv.style.backgroundColor = "teal";
    }, 5000);
}