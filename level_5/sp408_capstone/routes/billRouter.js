const express = require('express')
const billRouter = express.Router()
const Bill = require('../models/Bill.js')

// Get all Bills
billRouter.get("/", (req, res, next) => {
    Bill.find((err, bills) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bills)
    })
})

// Post a Bill
billRouter.post("/", (req, res, next) => {
    const newBill = new Bill(req.body)
    newBill.save((err, savedBill) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBill)
    })
})

// Get one
billRouter.get("/:billId", (req, res, next) => {
    Bill.findById({ _id: req.params.billId }, (err, oneBill) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(oneBill)
    })
})

// Delete one
billRouter.delete("/:billId", (req, res, next) => {
    Bill.findOneAndDelete({ _id: req.params.billId }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(`Successfully deleted item ${deletedItem} from the database`)
    })
})

// Update one
billRouter.put("/:billId", (req, res, next) => {
    Bill.findOneAndUpdate(
        { _id: req.params.billId }, // find one and update
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

// Query by isPaid
// billRouter.get("/search", (req, res, next) => {
//     Bill.find({ isPaid: req.query.isPaid }, (err, bills) => {
//         if (err) {
//             res.status(500);
//             return next(err);
//         }
//         return res.status(200).send(bills);
//     });
    
// })

// billRouter.get("/search", (req, res, next) => {
//     const isPaid = req.query.isPaid;

//     if (isPaid === undefined || (isPaid !== 'true' && isPaid !== 'false')) {
//         return res.status(400).send("Invalid 'isPaid' parameter. Use 'true' or 'false'.");
//     }

//     Bill.find({ isPaid: isPaid }, (err, bills) => {
//         if (err) {
//             res.status(500);
//             return next(err);
//         }
//         return res.status(200).send(bills);
//     });
// });

billRouter.get("/search/isPaid", (req, res, next) => {
    Bill.find({ isPaid: req.query.isPaid }, (err, bills) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(bills);
    });
});


module.exports = billRouter;