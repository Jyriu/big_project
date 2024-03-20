const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topic_controller.js');
const authenticateJWT = require('../middleware/authenticateJWT');

// Route pour obtenir tous les sujets
router.get('/', authenticateJWT, topicController.getTopics);

// Route pour créer un nouveau sujet
router.post('/', authenticateJWT, topicController.createTopic);

// Route pour obtenir un sujet spécifique
router.get('/:id', authenticateJWT, topicController.getTopic);

// Route pour mettre à jour un sujet
router.put('/:id', authenticateJWT, topicController.updateTopic);

// Route pour supprimer un sujet
router.delete('/:id', authenticateJWT, topicController.deleteTopic);

module.exports = router;