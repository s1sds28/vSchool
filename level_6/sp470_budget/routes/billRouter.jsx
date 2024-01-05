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

// Post a Bill
billRouter.post("/", (req, res, next) => {
  const newBill = new Bill(req.body)
  newBill.save((err, savedBill) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedBill)
  });
});

module.exports = billRouter;