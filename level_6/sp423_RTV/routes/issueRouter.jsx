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

// upvote

issueRouter.post("/:issueId/upvote", async (req, res, next) => {
  const userId = req.auth._id;
  const issueId = req.params.issueId; // Corrected variable name

  try {
    // Find the issue by ID
    const issue = await Issue.findById(issueId);

    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }

    // Check if the user's ID is already in the upVotes array
    if (!issue.upVotes.includes(userId)) {
      // Add user's ID to the upVotes array
      issue.upVotes.push(userId);

      // Save the updated issue
      await issue.save();

      return res.status(200).json({ message: 'Upvoted successfully' });
    }

    return res.status(400).json({ message: 'User already upvoted this issue' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// down vote

issueRouter.post("/:issueId/downvote", async (req, res, next) => {
  const userId = req.auth._id;
  const issueId = req.params.issueId; // Corrected variable name

  try {
    // Find the issue by ID
    const issue = await Issue.findById(issueId);

    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }

    // Check if the user's ID is already in the upVotes array
    if (!issue.downVotes.includes(userId)) {
      // Add user's ID to the downVotes array
      issue.downVotes.push(userId);

      // Save the updated issue
      await issue.save();

      return res.status(200).json({ message: 'downVote successfully' });
    }

    return res.status(400).json({ message: 'User already downVoted this issue' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = issueRouter;