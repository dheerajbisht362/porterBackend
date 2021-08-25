const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb+srv://dheeraj:2hp5CbXgCR4co9Jx@cluster0.mwuf9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
}

module.exports = connect