const User = require("../model/user.model");

const authorize = (permittedRoles) => {
 

  return async (req, res, next) => {

    //agr koi permitted role nhi h or permitted role empty h 
    //to everyone can visit hence ye middleware apne me se pass hone dega
    //(in code from left to right) so next()
    if (!permittedRoles || permittedRoles.length === 0) return next();


    //agr permitted roles defined h to ye user k role ko permitted role se
    //cross check krega agr match kr gya to next() kr dega ya allow kr dega
    //(from left to right) ye next() return kr dega
   
    console.log(req.user.user)
   
    const userAllowed = await User.findOne({
      _id: req.user.user._id,
      roles: { $in: permittedRoles }
    }).exec();

    //console.log(userAllowed, permittedRoles)


    //agr permitted roles defined h or vo user k role se match nhi kiya to 
    //(from left to right) next() nhi denge
    //althrough error k sath ek message bhej denge
    
    if (!userAllowed) return res.status(401).json({
      status: "failed",
      message: "You are not authorized to access this page",
    });

    
    //if user is allowed then next()
    return next();
  };


};

module.exports = authorize;
