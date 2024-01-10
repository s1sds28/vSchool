const mongoose = require('mongoose')
const Schema = mongoose.Schema

const billSchema = new Schema({
    issueDate: {
        type: Date
    },
    amount: {
        type: Number
    },
    isPaid: {
        type: Boolean,
        required: true
    },
    dueDate: {
        type: Date
    },
    paymentStatus: {
        type: String
    },
    account: {
        type: Schema.Types.ObjectId,
        ref: "Account",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Bill", billSchema)