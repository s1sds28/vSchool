const express = require("express");
const issueRouter = express.Router();
const Issue = require('../models/Issue.jsx');

// GET issues by user id
issueRouter.get("/user", (req, res, next) => {
  Issue.find( {user: req.auth._id }, (err, issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

// GET all issues
issueRouter.get("/", (req, res, next) => {
  Issue.find((err, issues) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(issues);
  });
});

// POST a new issue
issueRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id;
  const newIssue = new Issue(req.body);
  newIssue.save((err, savedIssue) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedIssue);
  });
});

// Delete issue
issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
    { _id: req.params.issueId, user: req.auth._id },
    (err, deletedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete todo: ${deletedIssue.title}`)
    }
  )
})

// Update issue
issueRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})

// Add upVote
issueRouter.put('/upVote/:issueId', (req, res, next) => {
  Issue.findOneAndUpdate(
      { _id: req.params.issueId },
      {
          $addToSet: { likedUsers: req.auth._id },
          $pull: { dislikedUsers: req.auth._id }
      },
      { new: true },
      (err, updatedIssue) => {
          if (err) {
              res.status(500)
              return next(err)
          }
          return res.status(201).send(updatedIssue)
      }
  )
})

// Add downVote
issueRouter.put('/downVote/:issueId', (req, res, next) => {
  Issue.findOneAndUpdate(
      { _id: req.params.issueId },
      {
          $pull: { likedUsers: req.auth._id },
          $addToSet: { dislikedUsers: req.auth._id }
      },
      { new: true },
      (err, updatedIssue) => {
          if (err) {
              res.status(500)
              return next(err)
          }
          return res.status(201).send(updatedIssue)
      }
  )
})

module.exports = issueRouter;