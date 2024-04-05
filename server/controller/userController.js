const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');

// register a user
exports.registerUser = async(req,res,next)=>{
        const {username,password} = req.body;
        const user = await User.create({
            username,password,
            avatar:{
                public_id:"this is a sample id",
                url:"profilepicUrl"
            }
        });
        
        sendToken(user,201,res);
        console.log('user registered successfully')
}
  

// login a user
exports.loginUser = async (req,res,next)=>{
    const {username,password} = req.body;

    if(!username || !password)
    {
        return next(new Error("Please Enter username and Password"))
    }

    const user = await User.findOne({username}).select("password");

    if(!user)
    {
        return next(new Error("Invalid username or password"));
    }

    const isPasswordMatched = user.comparePassword(password);

    if(!isPasswordMatched)
    {
        return next(new Error("Invalid username or password"));
    }

    sendToken(user, 201, res,req);

    console.log('successfully login')
}


// logout 
exports.logout = async(req,res,next)=>{
    res.cookie('userData',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    console.log('user logged out successfully')
    res.status(201).json({
        success:true,
        message:'user logged out successfully'
    })
}
