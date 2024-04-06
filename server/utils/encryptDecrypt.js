const CryptoJS = require('crypto-js');

exports.decryptMessage = (encryptedMessage, key) => {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, key);
    const decrypted = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decrypted;
};

exports.encryptMessage = (message, key) => {
    const encrypted = CryptoJS.AES.encrypt(message, key).toString();
    return encrypted;
};

exports.generateAESKey = () => {
    const keyLength = 256 / 8; 
    const randomBytes = CryptoJS.lib.WordArray.random(keyLength);
    const keyHex = randomBytes.toString();
    return keyHex;
};