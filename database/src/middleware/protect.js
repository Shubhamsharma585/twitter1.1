const jwt = require("jsonwebtoken")

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
             if(err) return reject(err)
             return resolve(payload)
        })
    })
}  

const protect = async(req, res, next) => {
    const bearerToken = req.headers.authorization

       //if token not present or not strating with Bearer then its invalid
       if(! bearerToken || !bearerToken.startsWith("Bearer ")) return res.status(400).send({status: "failed", message: "Please enter a valid token"})

       //if token is valid we need to verify it
       const token = bearerToken.split(" ")[1]
       const payload = await verifyToken(token)

       //if the payload is not verified then we return invalid
       if(! payload) return res.status(400).send({status: "failed", message: "Please enter a valid token"})

   
       

       //if the payload is returned the retrieve the user from it
      
       //then attach it to the req
       req.user = payload
       next() 
}

module.exports = protect