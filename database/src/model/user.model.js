
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const { model, Schema } = require("mongoose");


 
const userSchema = mongoose.Schema({
    name: {type: String, required: true },
    age: {type: String },
    profile_pic: {type: String },
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone: {type:String},
    tweets:[String],
    following: [{  
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
      }],
    follower:  [{ 
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
      }],
},{
    timestamps: true 
}) 


//making password encrypted while storing in schema
userSchema.pre("save", function(next) {
    if(!this.isModified("password")) return next()

    bcrypt.hash(this.password, 8, (err,hash) => {
        if(err) return next(err)

        this.password = hash
        next()
    })
})

//to check password after converting it in to encrypted password
userSchema.methods.checkPassword = function(password){

    return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password, (err, same) => {
            if(err) return reject(err)

            return resolve(same)
        })
    })
} 

module.exports = mongoose.model("users", userSchema)