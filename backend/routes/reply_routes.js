const express = require('express');
const router = express.Router();
const replyController = require('../controllers/reply_controller');
const authenticateJWT = require('../middleware/authenticateJWT');

// Route pour obtenir toutes les réponses pour un message spécifique
router.get('/posts/:postId/replies', authenticateJWT, replyController.getRepliesForPost);

// Route pour créer une nouvelle réponse pour un message spécifique
router.post('/posts/:postId/replies', authenticateJWT, replyController.createReplyForPost);

// Route pour obtenir une réponse spécifique
router.get('/:id', authenticateJWT, replyController.getReply);

// Route pour mettre à jour une réponse
router.put('/:id', authenticateJWT, replyController.updateReply);

// Route pour supprimer une réponse
router.delete('/:id', authenticateJWT, replyController.deleteReply);

// Route pour "liker" une réponse
router.post('/:id/like', authenticateJWT, replyController.likeReply);

// Route pour "disliker" une réponse
router.post('/:id/dislike', authenticateJWT, replyController.dislikeReply);

module.exports = router;