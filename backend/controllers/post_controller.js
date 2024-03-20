const Post = require('../models/post');

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createPost = async (req, res) => {
    try {
        const post = await Post.create({ ...req.body, userId: req.user.id });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatePost = async (req, res) => {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }

    if (post.userId !== req.user.id) {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    try {
        await Post.update(req.body, { where: { id: req.params.id } });
        res.status(200).json({ message: 'Post updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deletePost = async (req, res) => {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }

    if (post.userId !== req.user.id) {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    try {
        await Post.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};