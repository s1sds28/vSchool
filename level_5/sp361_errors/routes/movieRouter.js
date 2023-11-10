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
        res.status(200)
        res.send(movies)
    })
    
    .post((req, res) => {
        const newMovie = req.body
        newMovie._id = uuid()
        movies.push(newMovie)
        res.status(201).send(newMovie)
    })

movieRouter.route("/:id")
    .get((req, res, next) => {
        const movieId = req.params.id;
        const foundMovie = movies.find(movie => movie._id === movieId);
        if(!foundMovie){
            const error = new Error(`The item with id ${movieId} was not found`)
            // res.send(error) this is not DRY
            res.status(500)
            return next(error)
        }
        res.status(200).send(foundMovie)
    })
    .put(((req, res) => {
        const movieId = req.params.id;
        const updateObject = req.body
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        const updatedMovie = Object.assign(movies[movieIndex], updateObject)
        res.send(updatedMovie)
    }))
    .delete((req, res) => {
        const movieId = req.params.id
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        movies.splice(movieIndex, 1)
        res.send(`Successfully deleted movie ${movieId}`)

    });

movieRouter.route("/search/genre")
    .get((req, res, next) => {
        const genre = req.query.genre
        if(!genre){
            const error = new Error("You must provide a genre")
            res.status(500)
            return next(error)
        }
        const filteredMovies = movies.filter(movie => movie.genre === genre)
        res.send(filteredMovies)
        
    })
module.exports = movieRouter; 