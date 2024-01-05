const express = require("express")
const billRouter = express.Router();
const Bill = require('../models/Bill.jsx')


// GET all comments
billRouter.get("/", (req, res, next) => {
    Bill.find((err, bills) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(bills);
    });
});

module.exports = billRouter;