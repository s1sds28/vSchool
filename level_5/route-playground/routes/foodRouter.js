const express = require('express')
const Food = require('../models/food')
const foodRouter = express.Router()

// Get All
    // Get requests should return an empty array at first until you build the post request and add items to the DB
    // Callback

    foodRouter.get('/', (req, res, next) => {
        Food.find((err, food) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(food)
        })
    })

// Async & Await

    foodRouter.get('/async', async(req, res, next) => {
        try{
            const food = await Food.find()
            return res.status(200).send(food)
        } catch(err){
            res.status(500)
            return next(err)
        }
    })

// Post a food
// Callback

    foodRouter.post('/addFood', (req, res, next) => {
        const newFood = new Food(req.body)
        newFood.save((err, savedFood) => {
            if(err){
                res.status(500)
                return next(err)
            }
            res.status(200).send(savedFood)
        })
    })

// Async & Await

    foodRouter.post('/addFoodAsync', async(req, res, next) => {
        try{
            const newFood = new Food(req.body)
            const savedFood = await newFood.save()
            return res.status(200).send(savedFood)
        } catch(err){
            res.status(500)
            return next(err)            
        }
    })

// Delete a food

    // Callback
    foodRouter.delete('/:foodID', (req, res, next) => {
        Food.findOneAndDelete({ _id: req.params.foodID }, (err, deletedFood) => {
            if(err){
                res.status(500)
                return next(err)                
            }
            return res.status(201).send(`Deleted Food : ${deletedFood}`)
        })
    })



    // Async & Await

    foodRouter.delete('/async/:foodID', async(req, res, next) => {
        try{
            const deletedFood = await Food.findByIdAndDelete(req.params.foodID)
            return res.status(201).send(`Deleted Food : ${deletedFood}`)
        } catch(err){
            res.status(500)
            return next(err)                
        }
    })

// Edit a food

    // Callback

    foodRouter.put("/:foodID", (req, res, next) => {
        Food.findByIdAndUpdate(req.params.foodID, req.body, { new: true }, (err, updatedFood) => {
            if(err){
                res.status(500)
                return next(err)                
            }
            return res.status(201).send(updatedFood)
        }) 
    })


    // Async & Await

    // Build a put request using Async and Await here
    foodRouter.put("/async/:foodID", async(req, res, next) => {
        try{
            const updatedFood = await Food.findByIdAndUpdate(req.params.foodID, req.body, { new: true })
            return res.status(201).send(updatedFood)
        }
        catch(err){
            res.status(500)
            return next(err)
        }
    })


// Extra Credit Challenge

    // Build a query get route using callbacks or async and await here
    foodRouter.get("/search/type", (req, res, next) => {
        Food.find({ type: req.query.type }, (err, food) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(food)
        })
    })

    foodRouter.get("/search", async(req, res, next) => {
        try{
            const food = await Food.find({ type: req.query.type })
            return res.status(200).send(food)
        }
        catch(err){
            res.status(500)
            return next(err)
        }
    })

module.exports = foodRouter