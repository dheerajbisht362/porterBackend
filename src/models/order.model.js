const mongoose = require("mongoose");

const orderHistorySchema = new mongoose.Schema({
    orderId: String,
    transactionType: String,
    vechicalName: String,
    driverName: String,
    status: String,
    amount: Number,
    date: String
}, { versionKey: false })
const orderschema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    details: {
        type: [orderHistorySchema],
        default : undefined
    }
})
const Order = mongoose.model("order", orderschema)

module.exports = Order