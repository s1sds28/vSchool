const express = require('express')
const bookRouter = express.Router()
const Book = require("../models/book.js")


// Get all books
bookRouter.get("/", (req, res, next) => {
    Book.find((err, books)=> {
        if(err){
            res.status(500)
            return next(err)

        }
        return res.status(200).send(books)
    })
})

// Get by Author:
bookRouter.get("/:authorID", (req, res, next) => {
    Book.find({ author: req.params.authorID }, (err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

// Post one book
bookRouter.post("/:authorID", (req, res, next) => {
    req.body.author = req.params.authorID
    const newBook = new Book(req.body)
    newBook.save((err, savedBook) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBook)
    })
})

// Like a book
bookRouter.put("/like/:bookID", (req, res, next) => {
    Book.findOneAndUpdate(
        { _id: req.params.bookID },
        { $inc: { likes: 1}},
        { new: true },
        (err, updatedBook) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBook)
        }
    )
})

module.exports = bookRouter;