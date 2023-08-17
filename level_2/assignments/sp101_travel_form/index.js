const form = document.travelForm

form.addEventListener("submit", function(event){
    event.preventDefault()

    // Save inputs
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const age = form.age.value
    const gender = form.gender.value
    const diet = []

    // add checked diet requirements to diet var
    for(let i = 0; i < form.diet.length; i++) {
        if(form.diet[i].checked){
            diet.push(form.diet[i].value)
            form.diet[i].Selected = ""
        }
    }

    // Clear inputs after submit
    form.firstName.value = ""
    form.lastName.value = ""
    form.age.value = ""
    form.location.value = ""
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("vegetarian").checked = false;
    document.getElementById("kosher").checked = false;
    document.getElementById("carnivore").checked = false;

    // create alert
    alert(
        "First Name: " + firstName +
        "\nLast Name: " + lastName +
        "\nAge: " + age +
        "\nGender: " + gender +
        "\nDiet: " + ([...diet])
    )
});
