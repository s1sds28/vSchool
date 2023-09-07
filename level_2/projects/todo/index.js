const todoForm = document.forms["todo-form"]
const addTodoButton = document.getElementById("Add-Todo-Button")
const clearButton = document.getElementById("clear-form")
const todosId = document.getElementById("todosId")
const baseUrl = "https://api.vschool.io/steven/todo/"


function getData(){
    axios.get("https://api.vschool.io/steven/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}
getData()

// LISTS THE TODO TITLES TO THE DOM
function listData(data){
    clearList()
    for(let i = 0; i < data.length; i++){
        const listItem = document.createElement('li');
        const itemId = data[i]._id

        listItem.textContent = data[i].title;
        listItem.id = `li:${itemId}`

        // make a div for buttons
        const divButtons = document.createElement("div");


        // make edit button
        const editItemButton = document.createElement("button");
        editItemButton.textContent = "Edit"
        editItemButton.id = itemId


        // make delete button
        const deleteItemButton = document.createElement("button");
        deleteItemButton.textContent = "Delete"
        deleteItemButton.id = itemId;

        // Add delete event listener
        deleteItemButton.addEventListener("click", (event) => {
            event.preventDefault()
            deleteItem(itemId)

        })

        // Add edit event listener
        editItemButton.addEventListener("click", (event) => {
            event.preventDefault()
            editItem(itemId)
        })


        if(data[i].completed) { 
            listItem.style.textDecoration = "line-through";
        } else {
            listItem.style.textDecoration = "none";
        }


        // Add edit and delete buttons to divButtons
        divButtons.appendChild(editItemButton)
        divButtons.appendChild(deleteItemButton)

        // Add divButtons to listItem
        listItem.appendChild(divButtons)

        // Append listItem to document
        document.getElementById('todo-list').appendChild(listItem) 
    }
    clearForm()
}

function deleteItem(id) {
    const parameterUrl = id
    axios.delete(baseUrl.concat(parameterUrl))
    .then(res => console.log(res))
    .then(clearList)
    .then(getData)
    .catch(err => console.log(err))

}

function editItem(id) {
    const parameterUrl = id
    axios.get(baseUrl.concat(parameterUrl))
    .then(fillForm(id))
    .catch(err => console.log(err))
}

function fillForm(id) {
    const parameterUrl = id
    axios.get(baseUrl.concat(parameterUrl))
        .then(res => {
            const checked = res.data.completed;
            todoForm.title.value = res.data.title
            todoForm.description.value = res.data.description
            todoForm.price.value = res.data.price
            todoForm.completed.checked = checked
            todoForm.imgUrl.value = res.data.imgUrl
            todosId.textContent = id
        })
        .then(() => todosId.value = true)
        .catch(err => console.log(err))
}

function clearList(){
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }

}

todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    console.log(todosId.value)
    isEditing = todosId.value
    const todoId = todosId.textContent 



    const todo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value,
        completed: todoForm.completed.checked
    }
    
    
    if(!isEditing){
        axios.post("https://api.vschool.io/steven/todo", todo)
            .then(response => console.log(response.data))
            .then(clearList)
            .then(getData)
            .catch(error => console.log(error))
    } else {
        const parameterUrl = String(todosId.textContent)
        // console.log(baseUrl.concat(parameterUrl))
        console.log(String(todosId.textContent))
        axios.put(baseUrl.concat(parameterUrl), todo)
        .then(res => console.log(res.data))
        
        .catch(res => console.log(res.data))
    }
    clearList()
    clearForm()
    getData()
    
})

clearButton.addEventListener("click", () => clearForm())

const clearForm = () => {
    todosId.textContent = "";
    todosId.value = false;
    todoForm.reset();
}
