var pubButtons = document.getElementsByClassName('publications');
var applyButtons = document.getElementsByClassName('apply');
var pubModal = document.getElementById('pub_modal');
var applyModel = document.getElementById('apply_modal');
var pubClose = document.getElementById('close_pub_modal');
var applyClose = document.getElementById('close_apply_modal');
var countPub = 0, countApply = 0;

function togglePubModel() {
    if(countPub & 1)
        pubModal.style.display = "none";
    else
        pubModal.style.display = "flex";
    countPub ^= 1;
}

function toggleApplyModal() {
    if(countApply & 1)
        applyModel.style.display = "none";
    else
        applyModel.style.display = "flex";
    countApply ^= 1;
}


Array.from(applyButtons).forEach((button) => 
    button.addEventListener('click', toggleApplyModal)
)
applyClose.addEventListener('click', toggleApplyModal);


Array.from(pubButtons).forEach((button) => 
    button.addEventListener('click', togglePubModel)
)
pubClose.addEventListener('click', togglePubModel)