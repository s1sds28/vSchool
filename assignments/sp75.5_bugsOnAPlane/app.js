const form = document["airline-form"]
form.addEventListener("submit", function(event) {
    // Save inputs
    const firstName = form["first-name"].value
    const lastName = form["last-name"].value
    const age = form.age.value
    const gender = form.gender.value
    const location = form["travel-location"].value
    const diet = dietCheck()

    // Clear inputs
    form["first-name"].value = ""
    form["last-name"].value =""
    form.age.value = ""
    form.gender.value = ""
    form["travel-location"].value = ""
    form.vegan.value = false
    form.gluten.value = false
    form.paleo.value = false

    // Create alert
    alert("First Name: " + firstName + 
        "\nLast Name: " + lastName + 
        "\nAge: " + age +
        "\nGender: " + gender +
        "\nlocation: " + location +
        "\nDiet: " + diet +
        "\nAwesome, now if you die, it won't be an accident....")
});

// Find all diets checked
function dietCheck() {
    dietArr = []
    for(let i = 0; i < form.diet.length; i++) {
        if(form.diet[i].checked) {
            dietArr.push(" " + form.diet[i].value)
        }
    } 
    return dietArr
}