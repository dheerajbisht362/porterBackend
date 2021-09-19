const express = require("express");

const router = express.Router();
const Lead = require("../models/contactInfo.model");

router.post("/", async (req, res) => {
    try {
        const newLead = await Lead.create(req.body)
        res.send(newLead)
    }
    catch (err) {
        res.send(err)
    }
})


module.exports = router