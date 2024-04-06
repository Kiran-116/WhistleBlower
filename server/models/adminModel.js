const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({
    departName:{
        type:String,
        required:[true,"Please Enter your department name"],
        maxLength:[100,"Name cannot exceed 100 characters"]
    },
      password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,
      },
    key: {
        type: String,
        required: true,
    },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      resetPasswordToken: String,
      resetPasswordExpire: Date,
});

adminSchema.pre("save", async function (next){
    if(!this.isModified("password"))
    {
        next();
    }

    this.password = await bcrypt.hash(this.password,10);
});

// JWT Token
adminSchema.methods.getJWTToken = function (){
    return jwt.sign({id:this._id}, 'ljklkj237847sdfujdssd@$#$%#$%jsdfj289', {
        expiresIn: "1d",
    });
};

// compare password
adminSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password,this.password);
};

module.exports = mongoose.model('Admin',adminSchema);