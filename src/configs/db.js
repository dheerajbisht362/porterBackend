const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/porter", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
}

module.exports = connect