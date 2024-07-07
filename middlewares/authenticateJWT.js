// authenticateJWT.js

const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Replace with your actual secret key

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');
    console.log('Kontrol Edilen Token: ', token)

    if (token) {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Token verification failed' });
            }
            req.user = decoded.user; // Store decoded user information
            next();
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = authenticateJWT;
