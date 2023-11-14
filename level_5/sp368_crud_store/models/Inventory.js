const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Movie Blueprint key: datatype

const inventorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },

    price: {
        type: Number
    },

    isInStock: {
        type: Boolean
    }

})

// generate model name and schema
module.exports = mongoose.model("Inventory", inventorySchema)