const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Replace with your actual secret key

const authenticateJWT = (req, res, next) => {
    console.log(req)
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Forbidden' });
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = authenticateJWT;
