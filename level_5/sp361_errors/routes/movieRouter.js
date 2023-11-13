const express = require("express")
const movieRouter = express.Router()

const Movie = require('../models/Movie.js')


// Get All
movieRouter.get("/", (req, res, next) => {
    Movie.find((err, movies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})


// Post one
movieRouter.post("/", (req, res, next) => {
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMovie)

    } )
})

// Delete one
movieRouter.delete("/:movieId", (req, res) => {
    Movie.findOneAndDelete({_id: req.params.movieId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(`Successfully delelted item ${deletedItem.title} from the database`)


    })
})

// Update one
movieRouter.put("/:movieId", (req, res, next) => {
    Movie.findOneAndUpdate(
        { _id: req.params.movieId }, // find one and update
        req.body, // update object with this data
        { new: true }, // send the updated object not the old object
        (err, updatedMovie) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMovie)
        }

    )
})

module.exports = movieRouter; 