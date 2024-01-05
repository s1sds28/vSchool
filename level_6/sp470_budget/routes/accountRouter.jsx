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

module.exports = accountRouter;
