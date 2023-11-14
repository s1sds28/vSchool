const express = require("express")
const inventoryRouter = express.Router()

const Inventory = require('../models/Inventory.js')


// Get All
inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, allInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(allInventory)
    })
})

// Post one
inventoryRouter.post("/", (req, res, next) => {
    const newInventory = new Inventory(req.body)
    newInventory.save((err, savedInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInventory)
    })
})

// Get one
inventoryRouter.get("/:inventoryId", (req, res) => {
    Inventory.findById({ _id: req.params.inventoryId }, (err, oneItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(oneItem)
    })
})

// Delete one
inventoryRouter.delete("/:inventoryId", (req, res) => {
    Inventory.findOneAndDelete({ _id: req.params.inventoryId }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(`Successfully deleted item ${deletedItem} from the database`)
    })
})

// Update one
inventoryRouter.put("/:inventoyId", (req, res) => {
    Inventory.findOneAndUpdate(
        { _id: req.params.inventoyId }, // find one and update
        req.body,
        { new: true },
        (err, updatedInventory) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedInventory)
        }
    )
})


module.exports = inventoryRouter;