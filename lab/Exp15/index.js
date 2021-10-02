window.onload = () => {

    alert(`This is the information you didn't know you needed.
        \n\nThis is an example of showing info as soon as the page loads.`);

    var ourDiv = document.createElement('div');
    ourDiv.innerHTML = `This is shown as the page loads.`;
    ourDiv.style.color = "red";
    ourDiv.style.fontSize = "20px";
    ourDiv.style.margin = "auto";
    ourDiv.style.padding = "10px";
    ourDiv.style.boxShadow = "0px 2px 6px 0px grey";
    document.getElementById('content').appendChild(ourDiv);
}