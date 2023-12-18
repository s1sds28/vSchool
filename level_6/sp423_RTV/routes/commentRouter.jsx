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

module.exports = commentRouter;