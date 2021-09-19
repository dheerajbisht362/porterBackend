const mongoose = require("mongoose");

const contactInfoSchema = new mongoose.Schema({
    city: { type: String, required: true },
    name: { type: String, required: true },
    company: { type: String , default: null},
    contact:{type: Number , required: true},
    trip: { type: String, default: null },
    email: { type: String, required: true },
    desig: { type: String }
}, { versionKey: false })
const Lead = mongoose.model("lead",contactInfoSchema )

module.exports = Lead