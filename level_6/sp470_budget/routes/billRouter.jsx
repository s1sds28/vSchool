const express = require("express")
const billRouter = express.Router();
const Bill = require('../models/Bill.jsx')


// GET all Bills
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

// Delete a Bill
billRouter.delete("/:billId", (req, res, next) => {
  Bill.findOneAndDelete(
    { _id: req.params.billId, user: req.auth._id },
    (err, deletedBill) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted bill ${deletedBill._id}`)
    }
  )
})

billRouter.put("/:billId", (req, res, next) => {
  Bill.findByIdAndUpdate(
    { _id: req.params.billId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedBill) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedBill)
    }
  )
})

module.exports = billRouter;