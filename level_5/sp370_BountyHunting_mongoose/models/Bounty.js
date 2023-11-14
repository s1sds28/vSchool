const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Movie Blueprint key: datatype

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },

    isLiving: {
        type: Boolean
    },

    bountyAmt: {
        type: Number
    },
    forceFaction: {
        type: String
    }


})

// generate model name and schema
module.exports = mongoose.model("Bounty", bountySchema)