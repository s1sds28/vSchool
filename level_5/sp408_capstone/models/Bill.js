const mongoose = require('mongoose')
const Schema = mongoose.Schema

const billSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    isPaid: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Bill", billSchema)