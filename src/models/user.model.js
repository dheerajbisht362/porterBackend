const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber:{type: Number , default: null},
    city: { type: String , default: null},
    state: {type: String, default: null}
}, { versionKey: false })
const User = mongoose.model("user", userSchema)

module.exports = User