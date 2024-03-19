const Topic = require('../models/topic');

exports.getTopics = async (req, res) => {
    try {
        const topics = await Topic.findAll();
        res.status(200).json(topics);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createTopic = async (req, res) => {
    try {
        const topic = await Topic.create(req.body);
        res.status(201).json(topic);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTopic = async (req, res) => {
    try {
        const topic = await Topic.findById(req.params.id);
        if (topic) {
            res.status(200).json(topic);
        } else {
            res.status(404).json({ message: 'Topic not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTopic = async (req, res) => {
    try {
        const topic = await Topic.update(req.body, {
            where: { id: req.params.id }
        });
        if (topic) {
            res.status(200).json(topic);
        } else {
            res.status(404).json({ message: 'Topic not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteTopic = async (req, res) => {
    try {
        const topic = await Topic.destroy({
            where: { id: req.params.id }
        });
        if (topic) {
            res.status(200).json({ message: 'Topic deleted' });
        } else {
            res.status(404).json({ message: 'Topic not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};