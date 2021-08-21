const express = require("express")
const connect = require("./config/db")
const cors = require("cors")


const app = express()   
app.use(express.json())   
app.use(cors())  
 
 
const usersController = require("./controller/user.controller")
app.use("/users", usersController)
  
 

const {register, login} = require("./controller/auth.controller")
app.post("/register", register)
app.post("/login",login) 

 
 
const start = async() => {
    await connect()
    app.listen(2244, () => {
        console.log("listening to port 2244")
    })
} 

start();