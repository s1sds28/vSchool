const express = require("express");
const accountRouter = express.Router();
const Account = require('../models/Account.jsx');


// GET all accounts
accountRouter.get("/", (req, res, next) => {
    Account.find((err, accounts) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(accounts);
    });
});

// Post an account
accountRouter.post("/", (req, res, next) => {
  const newAccount = new Account(req.body)
  newAccount.save((err, savedAccount) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedAccount)
  });
});

// Delete an account
accountRouter.delete("/:accountId", (req, res, next) => {
  Account.findOneAndDelete(
    { _id: req.params.accountId, user: req.auth._id },
    (err, deletedAccount) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted account: ${deletedAccount._id}`)
    }
  )
})

// Update account
accountRouter.put("/:accountId", (req, res, next) => {
  Account.findOneAndUpdate(
    {_id: req.params.accountId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedAccount) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedAccount)
    }
  )
})



module.exports = accountRouter;
