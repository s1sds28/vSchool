const express = require("express")
const commentRouter = express.Router();
const Comment = require('../models/Comment.jsx')


// GET all comments
commentRouter.get("/", (req, res, next) => {
    Comment.find((err, comments) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(comments);
    });
});

// Post a comment
commentRouter.post("/:issueId", (req, res, next) => {
    req.body.user = req.auth._id
    req.body.issue = req.params.issueId 
    const newComment = new Comment(req.body);

    newComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err);
        }
        return res.status(201).send(savedComment)
    });
});

module.exports = commentRouter;