const express = require("express");
const accountRouter = express.Router();
const Account = require('../models/Account.jsx');


// GET all issues
accountRouter.get("/", (req, res, next) => {
    Account.find((err, accounts) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(accounts);
    });
  });

module.exports = accountRouter;
