const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message_controller');
const authenticateJWT = require('../middleware/authenticateJWT');

// Route pour obtenir tous les messages entre deux utilisateurs
router.get('/messages/:userId/:otherUserId', authenticateJWT, messageController.getMessagesBetweenUsers);

// Route pour créer un nouveau message
router.post('/messages', authenticateJWT, messageController.createMessage);

module.exports = router;