require('dotenv').config();

const express = require("express");
const jwt = require("jsonwebtoken")

const router = express.Router();
const User = require("../models/user.model");
const Order = require("../models/order.model");

router.post("/signup", async (req, res) => {
    const user = await User.findOne({ email: req.body.email }).lean().exec();
    if(user!==null) return res.sendStatus(404)
    const newUser = await User.create(req.body)
    res.send(newUser)
})

router.get("/", authenticateToken, async (req, res) => {
    const user = await User.findOne({ email: req.email }).lean().exec();
    return res.send(user)
})
router.post("/auth/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email }).lean().exec();
        if(user== null) return res.status(404).json({error:"Invaid logIn credentials"})
        if (user.password === req.body.password) {
    //authenticate user
        const email = user.email;
        const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);
        return res.json({accessToken: accessToken})    
        }
    return res.status(404).json({error:"Invaid logIn credentials"})
    }
    catch (err) {
        console.log(err.message)
        return res.send(err.message)
    }
})
router.patch("/update/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true})
        return res.send(user);
    }
    catch (err) {
        return res.status(400)
    }
})

router.post("/:id", async (req, res) => {
    const order = await Order.create(req.body)
    res.send(order)
})
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401);
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, email) => {
        if (err) return res.sendStatus(401)
        req.email = email
        next();
    })
}
module.exports = router