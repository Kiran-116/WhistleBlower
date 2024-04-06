const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Admin = require('../models/adminModel');

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

exports.isAuthenticatedAdmin = async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token){
        return next(new Error("Please Login to access this resource"));
    }   

    const decodedData = jwt.verify(token,"ljklkj237847sdfujdssd@$#$%#$%jsdfj289")
    req.user = await Admin.findById(decodedData.id);
    console.log(token);
    next();
};
