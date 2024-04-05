const mongoose = require("mongoose");

const connectDatabase = () => {
    try {
        mongoose.connect(process.env.DATABASE_URL,
        {
            // useNewUrlParser:true,
            // useUnifiedTopology:true,
        })
        .then(
            (data)=>{
                console.log('connection successfull to Database');
            }
        )
    } catch (err) {
        console.log('there is error in database connection');
        console.log(e);
        
    }
};

module.exports = connectDatabase;
