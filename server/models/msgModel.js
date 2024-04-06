const mongoose = require('mongoose');
const msgSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please Enter your username"],
    },
    category:{
        type:String,
        required:[true,"Please Enter your username"],
    },
    department:{
        type:String,
        required:[true,"Please Enter your username"],
    },
      message: {
        type: String,
        required: [true, "Please Enter Your Password"],
      },
      address: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      }
});

module.exports = mongoose.model('Msg',msgSchema);