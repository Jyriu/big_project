const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signup = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({ username: req.body.username, password: hashedPassword });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.body.username } });
        if (!user || !await bcrypt.compare(req.body.password, user.password)) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        const token = jwt.sign({ id: user.id }, 'your_jwt_secret');
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};