const express = require('express')

const {registerUser,loginUser,logout} = require('../controller/userController');
const {isAuthenticatedUser} = require('../middleware/auth')

const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        status: true,
        message: "connected successfully"
    })
})

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/logout',isAuthenticatedUser,logout);

module.exports  = router;