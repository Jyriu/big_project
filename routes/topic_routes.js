const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topic_controller.js');

// Route pour obtenir tous les sujets
router.get('/', topicController.getTopics);

// Route pour créer un nouveau sujet
router.post('/', topicController.createTopic);

// Route pour obtenir un sujet spécifique
router.get('/:id', topicController.getTopic);

// Route pour mettre à jour un sujet
router.put('/:id', topicController.updateTopic);

// Route pour supprimer un sujet
router.delete('/:id', topicController.deleteTopic);

module.exports = router;