var detailMovie1 = document.getElementById('d_movie1');
var detailMovie2 = document.getElementById('d_movie2');
var coverMovie1 = document.getElementById('dc_movie1');
var coverMovie2 = document.getElementById('dc_movie2');
var closeMovie1 = document.getElementById('c_movie1');
var closeMovie2 = document.getElementById('c_movie2');

detailMovie1.addEventListener('click', () => {
    coverMovie1.style.visibility = "visible";
})

closeMovie1.addEventListener('click', () => {
    coverMovie1.style.visibility = "hidden";
})

detailMovie2.addEventListener('click', () => {
    coverMovie2.style.visibility = "visible";
})

closeMovie2.addEventListener('click', () => {
    coverMovie2.style.visibility = "hidden";
})

