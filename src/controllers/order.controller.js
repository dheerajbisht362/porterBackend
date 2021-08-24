const express = require("express");

const router = express.Router();
const Order = require("../models/order.model");

router.get("/:id", async (req, res) => {
    const users = await Order.find({"userId": req.params.id }).lean().exec();
    res.send(users)
})

module.exports = router