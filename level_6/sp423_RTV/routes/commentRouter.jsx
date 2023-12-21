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

// Post an up vote
// commentRouter.post("/upvote/:issueId", async (req, res) => {
//   const issueId = req.params.issueId;
//   const userId = req.auth._id; // Assuming userId is sent in the request body

//   try {
//     // Find the comment by ID

//     const comment = await Comment.findById(issueId);

//     if (!comment) {
//       return res.status(404).json({ message: 'Issue not found' });
//     }

//     // Check if the user's ID is already in the upVotes array
//     if (!comment.upVotes.includes(userId)) {
//       // Add user's ID to the upVotes array
//       comment.upVotes.push(userId);

//       // Save the updated comment
//       await comment.save();

//       return res.status(200).json({ message: 'Upvoted successfully' });
//     }

//     return res.status(400).json({ message: 'User already upvoted this comment' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });


// Post an down vote


module.exports = commentRouter;