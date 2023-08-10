// var form = document.getElementByID("arline-form");
// var submit = document.getElementByID(submit);
// var query = document.querySelector;

const form = document["airline-form"]

function formAlert(Event) {
    Event.preventDefault()
    // var firstName = form.elements["firstName"].value;
    // var lastName = form.elements["lastName"].value;
    // var age = form.elements["age"].value;
    // var gender = form.elements["gender"].value;
    // var location = form.elements["travel-location"].value;
    // var diet = {};
    // if (form.elements['vegan'].checked) {
    //     var diet.pop(document.getElementById("vegan").value);
    // }
    // if (form.elements['gluten'].checked) {
    //     diet.push(document.getElementById('gluten').value);
    // }
    // if (form.elements['paleo'].checked) {
    //     diet.push(document.getElementById('paleo').value);
    // }


    // alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");

    //Test alert
    var okay = "okay"
    alert(okay)
}


form.addEventListener("submit", formAlert(Event));