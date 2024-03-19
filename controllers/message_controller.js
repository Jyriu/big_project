const Message = require('../models/message');

exports.getMessagesBetweenUsers = async (req, res) => {
    try {
        const messages = await Message.findAll({
            where: {
                [Op.or]: [
                    { sender_id: req.params.userId, receiver_id: req.params.otherUserId },
                    { sender_id: req.params.otherUserId, receiver_id: req.params.userId }
                ]
            },
            order: [['date', 'ASC']]
        });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createMessage = async (req, res) => {
    if (req.user.id !== req.body.sender_id) {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    try {
        const message = await Message.create(req.body);
        res.status(201).json(message);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};