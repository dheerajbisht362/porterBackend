const express = require("express");

const router = express.Router();
const User = require("../models/user.model");
const Order = require("../models/order.model");

router.post("/", async (req, res) => {
    const user = await User.create(req.body)
    res.send(user)
})
//get all the users
router.get("/", async (req, res) => {
    const user = await User.find({}).lean().exec();
    return res.send(user)
})
router.get("/:email", async (req, res) => {
    const user = await User.findOne({ email: req.params.email }).lean().exec();
    return res.render("user/orderHistory", { userId: user._id })
})

router.post("/auth/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.email }).lean().exec();
    if (user.password== null) return res.status(401).json({ "Error": "Invalid LogIn details" })
    if (user.password === req.body.password) {
      return res.send(user) 
    }
    return res.status(401).json({ "Error": "Invalid LogIn details" })
})

router.post("/:id", async (req, res) => {
    const order = await Order.create(req.body)
    res.send(order)
})

module.exports = router