const express = require('express')
const billProviderRouter = express.Router()
const BillProvider = require('../models/BillProvider.js')

// Get all Bills
billProviderRouter.get("/", (req, res, next) => {
    BillProvider.find((err, billProviders) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(billProviders)
    })
})

// Post a Bill
billProviderRouter.post("/", (req, res, next) => {
    const newBillProvider = new BillProvider(req.body)
    newBillProvider.save((err, savedBillProvider) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBillProvider)
    })
})

// Get one
// billRouter.get("/:billId", (req, res, next) => {
//     Bill.findById({ _id: req.params.billId }, (err, oneBill) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(oneBill)
//     })
// })

// Delete one
// billRouter.delete("/:billId", (req, res, next) => {
//     Bill.findOneAndDelete({ _id: req.params.billId }, (err, deletedItem) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(201).send(`Successfully deleted item ${deletedItem} from the database`)
//     })
// })

// Update one
// billRouter.put("/:billId", (req, res, next) => {
//     Bill.findOneAndUpdate(
//         { _id: req.params.billId }, // find one and update
//         req.body,
//         { new: true },
//         (err, updatedBill) => {
//             if(err){
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(201).send(updatedBill)
//         }
//     )
// })


// billRouter.get("/search/isPaid", (req, res, next) => {
//     Bill.find({ isPaid: req.query.isPaid }, (err, bills) => {
//         if (err) {
//             res.status(500);
//             return next(err);
//         }
//         return res.status(200).send(bills);
//     });
// });


module.exports = billProviderRouter;