const mongoose = require('mongoose')
const Schema = mongoose.Schema

const billSchema = new Schema({
    issueDate: {
        type: Date
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
    billProvider: {
        type: Schema.Types.ObjectId,
        ref: "BillProvider",
        required: true
    }
})

module.exports = mongoose.model("Bill", billSchema)