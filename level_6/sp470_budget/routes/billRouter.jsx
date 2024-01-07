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

// Get One Bill
billRouter.get("/:billId", (req, res, next) => {
  Bill.findById(req.params.billId, (err, bill) => {
    if(err){
      res.status(500);
      return next(err);
    }
    if(!bill){
      res.status(404);
      return next(new Error(`Bill not found with ID: ${req.params.billId}`));
    }
    return res.status(200).send(bill);
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

// Edit a Bill
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