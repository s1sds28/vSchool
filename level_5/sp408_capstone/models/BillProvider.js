const mongoose = require('mongoose')
const Schema = mongoose.Schema

const billProviderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    frequency: {
        type: String
    },
    catagory: {
        type: String
    }
    
})

module.exports = mongoose.model("BillProvider", billProviderSchema)