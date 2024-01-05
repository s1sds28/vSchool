const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountSchema = new Schema({
    company: {
        type: String,
        required: true
    },
    schedule: {
        type: String
    },
    paymentMethod: {
        type: String
    },
    accountNumber: {
        type: String
    },
    budgetAmount: {
        type: String
    },
    description: {
        type: String
    },
    User: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

    
})

module.exports = mongoose.model("AccountProvider", accountSchema)