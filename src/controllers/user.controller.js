const express = require("express");

const router = express.Router();
const User = require("../models/user.model");

router.post("/", async (req, res) => {
    console.log(req.body)
    const user = await User.create(req.body)
    res.send(user)
})
router.post("/:id", async (req, res) => {
    const order = await Order.create(req.body)
    res.send(order)
})

module.exports = router