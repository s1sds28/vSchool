const express = require("express")
const movieRouter = express.Router()
const uuid = require("uuid").v4;

// Fake data

const movies = [
    { title: "die hard", genre: "action", haveWatched: true, _id: "123" },
    { title: "star wars IV", genre: "fantasy", haveWatched: false, _id: uuid() },
    { title: "lion king", genre: "fantasy", haveWatched: false, _id: uuid() },
    { title: "friday the 13th", genre: "horror", haveWatched: true, _id: uuid() }    

]

movieRouter.route("/")
    .get((req, res) => {
        res.send(movies)
    })
//     .post((req, res) => {
//         const newTodo = req.body
//         newTodo._id = uuid()
//         todos.push(newTodo)
//         res.send(`Successfully added ${newTodo.name} to the todos array`)
//     })

// todoRouter.route("/:id")
//     .get((req, res) => {
//         const { id } = req.params;
//         const todo = todos.find(todo => todo._id === id) 
//         if (todo){
//             res.send(todo)
//         } else {
//             res.status(404).send(`Todo with id ${id} not found`)
//         }
//     })
//     .put((req, res) => {
//         const { id } = req.params;
//         const updatedTodo = req.body;

//         const todoIndex = todos.findIndex(todo => todo._id === id);

//         if (todoIndex !== -1) {
//             todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo };
//             res.send(`Successfully updated todo with ID ${id}`);
//         } else {
//             res.status(404).send(`Todo with ID ${id} not found`);
//         }
//     })
//     .delete((req, res) => {
//         const { id } = req.params;

//         const todoIndex = todos.findIndex(todo => todo._id === id);

//         if (todoIndex !== -1) {
//             const deletedTodo = todos.splice(todoIndex, 1)[0];
//             res.send(`Successfully deleted todos with ID ${id}`);
//         } else {
//             res.status(404).send(`todo with ID ${id} not found`);
//         }
//     });




module.exports = movieRouter; 