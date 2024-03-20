const Reply = require('../models/reply');
const Like = require('../models/like');

exports.getRepliesForPost = async (req, res) => {
    try {
        const replies = await Reply.findAll({ where: { postId: req.params.postId } });
        res.status(200).json(replies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createReplyForPost = async (req, res) => {
    try {
        const reply = await Reply.create({ ...req.body, postId: req.params.postId, userId: req.user.id });
        res.status(201).json(reply);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getReply = async (req, res) => {
    try {
        const reply = await Reply.findById(req.params.id);
        if (reply) {
            res.status(200).json(reply);
        } else {
            res.status(404).json({ message: 'Reply not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateReply = async (req, res) => {
    try {
        const reply = await Reply.update(req.body, {
            where: { id: req.params.id, userId: req.user.id }
        });
        if (reply) {
            res.status(200).json(reply);
        } else {
            res.status(404).json({ message: 'Reply not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteReply = async (req, res) => {
    try {
        const reply = await Reply.destroy({
            where: { id: req.params.id, userId: req.user.id }
        });
        if (reply) {
            res.status(200).json({ message: 'Reply deleted' });
        } else {
            res.status(404).json({ message: 'Reply not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.likeReply = async (req, res) => {
    try {
        const like = await Like.create({ userId: req.user.id, replyId: req.params.id, like: true });
        res.status(201).json(like);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.dislikeReply = async (req, res) => {
    try {
        const like = await Like.create({ userId: req.user.id, replyId: req.params.id, like: false });
        res.status(201).json(like);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};