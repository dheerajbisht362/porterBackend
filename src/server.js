const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
const port = 2345;

const connect = require("./configs/db");

const userController = require("./controllers/user.controller");
const orderController = require("./controllers/order.controller")

app.use("/users", userController);
app.use("/order", orderController);


app.listen(port, async (req, res) => {
    connect();
    console.log("Listening to port ", port);
})