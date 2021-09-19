const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');


app.use(express.json());
var port = process.env.PORT || 2345;

const connect = require("./configs/db");

const userController = require("./controllers/user.controller");
const orderController = require("./controllers/order.controller")
const contactController = require("./controllers/contactInfo.controller")

app.use(cors())
app.use("/user", userController);
app.use("/order", orderController);
app.use("/leads", contactController);

app.use(express.urlencoded({ extended: false }));

app.listen(port, async (req, res) => {
    connect();
    console.log("Listening to port ", port);
})