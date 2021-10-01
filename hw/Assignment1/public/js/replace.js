fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("#replace_nav");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
.catch(err => console.log("Error fetching nav.html: ", err));

fetch('footer.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("#replace_footer");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
.catch(err => console.log("Error fetching footer.html: ", err));