const Msg = require('../controller/msgController');
const { encryptMessage } = require('../utils/encryptDecrypt'); // Import only the encryptMessage function
const Message = require('../models/msgModel'); // Import your message schema

exports.createMsg = async (req, res) => {
    const { title, category, department, message, address, key } = req.body;

    try {
        const encryptedMessage = encryptMessage(message, key);
        const userIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const encryptedAddress = encryptWithAES(userIP, "2981c1586f3af35066cd19ff2e5703862fca3e819570bf08a7475c64fe490a68");

        // Create a new message document
        const newMessage = await Message.create({
            title,
            category,
            department,
            message: encryptedMessage, 
            address: encryptedAddress,
        });

        res.status(201).json({
            success: true,
            message: 'Message created successfully',
            data: newMessage,
        });
    } catch (error) {
        console.error('Error creating message:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

exports.getMsgsByDepartment = async (req, res) => {
    const department = req.cookies.departName;

    try {
        const messages = await Message.find({ department });

        res.status(200).json({
            success: true,
            message: 'Messages retrieved successfully',
            data: messages,
        });

    } catch (error) {
        console.error('Error fetching messages by department:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

