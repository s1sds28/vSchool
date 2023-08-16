// Add items to list 
const form = document.addItem

form.addEventListener("submit", (event) => {
    event.preventDefault()
    //console.log("okay")

    // Save input
    let newItem = document.addItem.title.value

    // Clear input
    document.addItem.title.value = ""

    // Create element
    const newLi = document.createElement("li")

    // Add text
    newLi.textContent = newItem

    // Add edit button
    // editButton = document.createElement("button")
    // editButton.textContent = "edit"
    // newLi.appendChild(editButton)

    // Add delete button
    deleteButton = document.createElement("button")
    deleteButton.textContent = "x"
    deleteButton.addEventListener("click", (event) => {
        // newLi.parentNode.removeChild(newLi)
        newLi.remove()
    })
    newLi.appendChild(deleteButton)

    // Append element 
    document.getElementById("list").append(newLi)

});
