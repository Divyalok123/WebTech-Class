var ourForm = document.getElementById('form');

function handleSubmit(e) {
    e.preventDefault();
    var name = e.target.name.value;
    var age = e.target.age.value;
    var address = e.target.address.value;
    var subject = e.target.subject.value;

    name = name.replace(' ', '');

    if(!name || !age || !address || !subject) {
        alert("No field should be empty!");
        return;
    }    

    if(name.length < 3) {
        alert("Name should be longer than 3 letters!");
        return;
    }

    if(age < 1 || age > 150) {
        alert("Age should be between 1 and 150!");
        return;
    }

    alert("Form is submitted!");
}

ourForm.addEventListener('submit', handleSubmit);