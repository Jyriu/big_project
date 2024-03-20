const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    if (req.user.id !== req.params.id) {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    try {
        const user = await User.update(req.body, { where: { id: req.params.id } });
        if (user[0] === 0) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json({ message: 'User updated successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    if (req.user.id !== req.params.id) {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    try {
        const user = await User.destroy({ where: { id: req.params.id } });
        if (user) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateAvatar = async (req, res) => {
    if (req.user.id !== req.params.id) {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    try {
        const user = await User.update({ avatar: req.body.avatar }, { where: { id: req.params.id } });
        if (user[0] === 0) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json({ message: 'Avatar updated successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateBanner = async (req, res) => {
    if (req.user.id !== req.params.id) {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    try {
        const user = await User.update({ banner: req.body.banner }, { where: { id: req.params.id } });
        if (user[0] === 0) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json({ message: 'Banner updated successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateProfile = async (req, res) => {
    if (req.user.id !== req.params.id) {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    try {
        const user = await User.update(req.body, { where: { id: req.params.id } });
        if (user[0] === 0) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json({ message: 'Profile updated successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};