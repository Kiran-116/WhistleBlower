const express = require('express')
const {registerAdmin,loginAdmin,logoutAdmin} = require('../controller/adminController');
const {createMsg} = require('../controller/msgController');
const {isAuthenticatedUser, isAuthenticatedAdmin} = require('../middleware/auth');
const {generateAESKey} = require('../utils/encryptDecrypt');

const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        status: true,
        message: "connected successfully"
    })
})

router.get('/generateKey',(req,res)=>{
    const key = generateAESKey();
    res.json({
        status: true,
        key: key
    })
})

// Message
router.post('/msg/create', createMsg);

// Admin Routes
router.post('/admin/register',registerAdmin);
router.post('/admin/login',loginAdmin);
router.get('/admin/logout',isAuthenticatedAdmin,logoutAdmin);

module.exports  = router;