const express = require("express")
const bountyRouter = express.Router()

const Bounty = require('../models/Bounty.js')


// Get All
bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, allInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(allInventory)
    })
})

// Post one
bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

// Get one
bountyRouter.get("/:bountyId", (req, res) => {
    Bounty.findById({ _id: req.params.bountyId }, (err, oneBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(oneBounty)
    })
})

// Delete one
bountyRouter.delete("/:bountyId", (req, res) => {
    Bounty.findOneAndDelete({ _id: req.params.bountyId }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(`Successfully deleted item ${deletedItem} from the database`)
    })
})

// Update one
bountyRouter.put("/:bountyId", (req, res) => {
    Bounty.findOneAndUpdate(
        { _id: req.params.bountyId }, // find one and update
        req.body,
        { new: true },
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

// Query by forceFaction
bountyRouter.get("/search/forceFaction", (req, res, next) => {
    Bounty.find( { forceFaction: req.query.forceFaction }, (err, bounties ) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})


module.exports = bountyRouter;