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
    
    .post((req, res) => {
        const newMovie = req.body
        newMovie._id = uuid()
        movies.push(newMovie)
        res.send(newMovie)
    })

movieRouter.route("/:id")
//     .get((req, res) => {
//         const { id } = req.params;
//         const todo = todos.find(todo => todo._id === id) 
//         if (todo){
//             res.send(todo)
//         } else {
//             res.status(404).send(`Todo with id ${id} not found`)
//         }
//     })
    .put((req, res) => {
        const { id } = req.params;
        const updatedMovie = req.body;

        const movieIndex = movies.findIndex(movie => movie._id === id);

        if (movieIndex !== -1) {
            movies[movieIndex] = { ...movies[movieIndex], ...updatedMovie };
            res.send(`Successfully updated movie with ID ${id}`);
        } else {
            res.status(404).send(`Movie with ID ${id} not found`);
        }
    })
    .delete((req, res) => {
        const movieId = req.params.id
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        movies.splice(movieIndex, 1)
        res.send(`Successfully deleted movie ${movieId}`)

    });

module.exports = movieRouter; 