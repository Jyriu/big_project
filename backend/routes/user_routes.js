const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
const authenticateJWT = require('../middleware/authenticateJWT');

// Route pour obtenir tous les utilisateurs
router.get('/users', authenticateJWT, userController.getUsers);

// Route pour obtenir un utilisateur spécifique
router.get('/users/:id', authenticateJWT, userController.getUser);

// Route pour créer un nouvel utilisateur
router.post('/users', userController.createUser);

// Route pour mettre à jour un utilisateur
router.put('/users/:id', authenticateJWT, userController.updateUser);

// Route pour supprimer un utilisateur
router.delete('/users/:id', authenticateJWT, userController.deleteUser);

// Route pour mettre à jour l'avatar d'un utilisateur
router.put('/users/:id/avatar', authenticateJWT, userController.updateAvatar);

// Route pour mettre à jour la bannière d'un utilisateur
router.put('/users/:id/banner', authenticateJWT, userController.updateBanner);

// Route pour mettre à jour le profil d'un utilisateur
router.put('/users/:id/profile', authenticateJWT, userController.updateProfile);

module.exports = router;