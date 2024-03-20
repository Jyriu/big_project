const express = require('express');
const router = express.Router();
const postController = require('../controllers/post_controller');
const authenticateJWT = require('../middleware/authenticateJWT');

// Route pour obtenir tous les posts
router.get('/posts', authenticateJWT, postController.getPosts);

// Route pour obtenir un post spécifique
router.get('/posts/:id', authenticateJWT, postController.getPost);

// Route pour créer un nouveau post
router.post('/posts', authenticateJWT, postController.createPost);

// Route pour mettre à jour un post
router.put('/posts/:id', authenticateJWT, postController.updatePost);

// Route pour supprimer un post
router.delete('/posts/:id', authenticateJWT, postController.deletePost);

// faire route pour liker et disliker un post

module.exports = router;
