const express = require("express")
const todoRouter = express.Router()
const uuid = require("uuid").v4;

// Fake data

const todos = [
    { name: "1Name", description: "description", imgUrl: "imgUrl", completed: true, _id: "123" },
    { name: "2Name", description: "description", imgUrl: "imgUrl", completed: false, _id: uuid() },
    { name: "3Name", description: "description", imgUrl: "imgUrl", completed: true, _id: uuid() }    
]

todoRouter.route("/")
    .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuid()
        todos.push(newTodo)
        res.send(`Successfully added ${newTodo.name} to the todos array`)
    })

todoRouter.route("/:id")
    .get((req, res) => {
        const { id } = req.params;
        const todo = todos.find(todo => todo._id === id) 
        if (todo){
            res.send(todo)
        } else {
            res.status(404).send(`Todo with id ${id} not found`)
        }
    })
    .put((req, res) => {
        const { id } = req.params;
        const updatedTodo = req.body;

        const todoIndex = todos.findIndex(todo => todo._id === id);

        if (todoIndex !== -1) {
            todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo };
            res.send(`Successfully updated todo with ID ${id}`);
        } else {
            res.status(404).send(`Todo with ID ${id} not found`);
        }
    })
    .delete((req, res) => {
        const { id } = req.params;

        const todoIndex = todos.findIndex(todo => todo._id === id);

        if (todoIndex !== -1) {
            const deletedTodo = todos.splice(todoIndex, 1)[0];
            res.send(`Successfully deleted todos with ID ${id}`);
        } else {
            res.status(404).send(`todo with ID ${id} not found`);
        }
    });




module.exports = todoRouter; 