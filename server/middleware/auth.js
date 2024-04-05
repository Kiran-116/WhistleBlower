const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

exports.isAuthenticatedUser = async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token){
        return next(new Error("Please Login to access this resource"));
    }   

    const decodedData = jwt.verify(token,"ljklkj237847sdfujdssd@$#$%#$%jsdfj289")
    req.user = await User.findById(decodedData.id);
    console.log(token);
    next();
};
