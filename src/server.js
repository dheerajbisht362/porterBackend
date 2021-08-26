const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');


app.use(express.json());
const port = 2345;

const connect = require("./configs/db");

const userController = require("./controllers/user.controller");
const orderController = require("./controllers/order.controller")

app.use(cors())
app.use("/user", userController);
app.use("/order", orderController);

app.use(express.urlencoded({ extended: false }));

app.listen(port, async (req, res) => {
    connect();
    console.log("Listening to port ", port);
})