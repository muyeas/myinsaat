const jwt = require('jsonwebtoken');
const User = require('../models/User');
const secretKey = 'your_secret_key'; // Güvenli bir şekilde saklanmalıdır

const login = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Kullanıcı doğrulandıktan sonra token oluştur
        const token = jwt.sign({ id: user._id, username: user.username }, secretKey, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        console.log(error);
        return next(error);
    }
};

module.exports = {
    login
};
