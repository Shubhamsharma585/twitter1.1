const mongoose = require("mongoose")
const DB = `mongodb+srv://@cluster0.ygh5u.mongodb.net/twitter?retryWrites=true&w=majority`
 
 

const connect = () => {
    return mongoose.connect(DB,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(() => {
        console.log("successfull")
    }).catch((err) => console.log("not succ"))
}

module.exports = connect 
