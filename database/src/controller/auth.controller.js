const express = require("express")
const router = express.Router()
const User = require("../model/user.model")
require("dotenv").config()
const jwt = require("jsonwebtoken") 
 

const newToken = (payload) => {
    return jwt.sign({payload}, process.env.JWT_SECRET_KEY)
}

const register = async(req,res) => {

   try {
 //check weather email is registerd or already existed
 let user = await User.findOne({email: req.body.email})

 //case a- alredy regis
 if(user) return res.status(400).send({status: "failed", message:"user already existed"})

 //case b- not regi to usko db me post krke register karenge
 user = await User.create(req.body)

 //user ko bhejne k liye token create krenge
 const token = newToken(user)

 //user ko token deke frontend pe bhej denge
 return res.status(201).json({user, token})
    }

catch (err) 
   {
        res.status(400).json({
            status: 'failure',
            message: err.message
        });
    }
   
}  



const login = async(req,res) => {

    try {
 //first hum check karenge ya dekhenge ki jo email request kr rha h vo db me h bhi ya nhi
 let user = await User.findOne({email: req.body.email}).populate("following").exec()
 
 //agr nhi to error 400 bhej denge
 if(!user) return res.status(400).send({status: "failed", message: "Incorrect email or password"})

 //if the email exists we will match the password
 //console.log(user)
 const match = await user.checkPassword(req.body.password)

 //case a- password wrong h to fir error 400 bhej denge
 if(!match) return res.status(400).send({status: "failed", message: "Incorrect password"})

 //case b- password shi h to token create krenge
 const token = newToken(user)

 // user ko token deke frontend pe bhej denge
 return res.status(201).json({user, token})
    } 
    
    catch(err) {

        res.status(400).json({
            status: 'failure',
            message: err.message
        });
   
    }
   
 }
 




module.exports = {register, login}