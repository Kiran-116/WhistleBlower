const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please Enter your username"],
        maxLength:[100,"Name cannot exceed 100 characters"]
    },
      password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,
      },
      avatar:{
        public_id:{
            type:String,
            // required:true,
        },
        url:{
            type:String,
            // required:true,
        }
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      resetPasswordToken: String,
      resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next){
    if(!this.isModified("password"))
    {
        next();
    }

    this.password = await bcrypt.hash(this.password,10);
});

// JWT Token
userSchema.methods.getJWTToken = function (){
    return jwt.sign({id:this._id}, 'ljklkj237847sdfujdssd@$#$%#$%jsdfj289', {
        expiresIn: "1d",
    });
};

// compare password
userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password,this.password);
};

module.exports = mongoose.model('User',userSchema);