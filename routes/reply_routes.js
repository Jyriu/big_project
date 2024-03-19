const express = require('express');
const router = express.Router();
const replyController = require('../controllers/reply_controller');

// Route pour obtenir toutes les réponses pour un message spécifique
router.get('/posts/:postId/replies', replyController.getRepliesForPost);

// Route pour créer une nouvelle réponse pour un message spécifique
router.post('/posts/:postId/replies', replyController.createReplyForPost);

// Route pour obtenir une réponse spécifique
router.get('/:id', replyController.getReply);

// Route pour mettre à jour une réponse
router.put('/:id', replyController.updateReply);

// Route pour supprimer une réponse
router.delete('/:id', replyController.deleteReply);

// Route pour "liker" une réponse
router.post('/:id/like', replyController.likeReply);

// Route pour "disliker" une réponse
router.post('/:id/dislike', replyController.dislikeReply);

module.exports = router;