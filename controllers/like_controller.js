const Like = require('../models/like');

exports.createLike = async (req, res) => {
    try {
        const like = await Like.create({ ...req.body, userId: req.user.id });
        res.status(201).json(like);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getLikesForPost = async (req, res) => {
    try {
        const likes = await Like.findAll({ where: { postId: req.params.postId } });
        res.status(200).json(likes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getLikesForReply = async (req, res) => {
    try {
        const likes = await Like.findAll({ where: { replyId: req.params.replyId } });
        res.status(200).json(likes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteLike = async (req, res) => {
    try {
        const like = await Like.destroy({ where: { id: req.params.id } });
        if (like) {
            res.status(200).json({ message: 'Like deleted' });
        } else {
            res.status(404).json({ message: 'Like not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};