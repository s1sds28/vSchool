const express = require('express')
const billProviderRouter = express.Router()
const BillProvider = require('../models/BillProvider.js')
const Bill = require('../models/Bill.js')

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
billProviderRouter.get("/:billProviderId", (req, res, next) => {
    BillProvider.findById({ _id: req.params.billProviderId }, (err, oneBillProvider) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(oneBillProvider)
    })
})

// Delete one
billProviderRouter.delete("/:billProviderId", async (req, res, next) => {
    try {
        // Delete bills associated with the specified billProviderId
        const deleteBillsResult = await Bill.deleteMany({ billProvider: req.params.billProviderId });
    
        // Delete the billProvider
        const deleteProviderResult = await BillProvider.findOneAndDelete({ _id: req.params.billProviderId });
    
        // If no bills or billProvider found, respond with a 404 status
        if (!deleteProviderResult) {
          return res.status(404).send('No billProvider found for the specified billProviderId');
        }
    
        // Respond with a success message
        return res.status(200).json({
          message: `Successfully deleted ${deleteBillsResult.deletedCount} bills and the billProvider for the specified billProviderId`,
        });
      } catch (error) {
        // Handle errors
        res.status(500).json({ error: error.message });
      }
    });

// Update one
billProviderRouter.put("/:billProviderId", (req, res, next) => {
    BillProvider.findOneAndUpdate(
        { _id: req.params.billProviderId }, // find one and update
        req.body,
        { new: true },
        (err, updatedBillProvider) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBillProvider)
        }
    )
    });

// Search by catagory
billProviderRouter.get("/search/catagory", (req, res, next) => {
    BillProvider.find({ catagory: req.query.catagory }, (err, billProvider) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(billProvider);
    });
});

module.exports = billProviderRouter;