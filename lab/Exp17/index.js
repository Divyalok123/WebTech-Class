var toBold = document.getElementById('bold_text');
var toItailc = document.getElementById('italic_text');
var toUnderline = document.getElementById('underline_text');

var valb = 0, vali = 0, valu = 0;

function makeItBold() {
    if(valb & 1)
        toBold.style.fontWeight = "normal";
    else
        toBold.style.fontWeight = "bold";
    valb ^= 1;
}

function makeItItalic() {
    if(vali & 1)
        toItailc.style.fontStyle = "normal";
    else
        toItailc.style.fontStyle = "italic";
    vali ^= 1;
}

function makeItUnderline() {
    if(valu & 1)
        toUnderline.style.textDecoration = "none";
    else
        toUnderline.style.textDecoration = "underline";
    valu ^= 1;
}

toBold.addEventListener('click', makeItBold);
toItailc.addEventListener('click', makeItItalic);
toUnderline.addEventListener('click', makeItUnderline);