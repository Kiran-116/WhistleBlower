const Admin = require('../models/adminModel');
const sendToken = require('../utils/jwtToken');
const {generateAESKey} = require('../utils/encryptDecrypt');

// register a user
exports.registerAdmin = async(req,res,next)=>{
        const {departName,password} = req.body;
        const key = generateAESKey();
        const admin = await Admin.create({
            departName,password,
            key
        });
        
        sendToken(admin,201,res);
        console.log('user registered successfully')
}

// login a user
exports.loginAdmin = async (req,res,next)=>{
    const {departName,password} = req.body;

    if(!departName || !password)
    {
        return next(new Error("Please Enter departName and Password"))
    }

    const admin = await Admin.findOne({departName}).select("password");

    if(!admin)
    {
        return next(new Error("Invalid departName or password"));
    }

    const isPasswordMatched = admin.comparePassword(password);

    if(!isPasswordMatched)
    {
        return next(new Error("Invalid departName or password"));
    }

    sendToken(admin, 201, res,req);

    console.log('successfully login')
}


// logout 
exports.logoutAdmin = async(req,res,next)=>{
    res.cookie('userData',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    console.log('admin logged out successfully')
    res.status(201).json({
        success:true,
        message:'admin logged out successfully'
    })
}
