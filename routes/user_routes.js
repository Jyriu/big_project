const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

// Route pour obtenir tous les utilisateurs
router.get('/users', userController.getUsers);

// Route pour obtenir un utilisateur spécifique
router.get('/users/:id', userController.getUser);

// Route pour créer un nouvel utilisateur
router.post('/users', userController.createUser);

// Route pour mettre à jour un utilisateur
router.put('/users/:id', userController.updateUser);

// Route pour supprimer un utilisateur
router.delete('/users/:id', userController.deleteUser);

// Route pour mettre à jour l'avatar d'un utilisateur
router.put('/users/:id/avatar', userController.updateAvatar);

// Route pour mettre à jour la bannière d'un utilisateur
router.put('/users/:id/banner', userController.updateBanner);

// Route pour mettre à jour le profil d'un utilisateur
router.put('/users/:id/profile', userController.updateProfile);

// Route pour l'inscription d'un utilisateur
router.post('/register', userController.register);

// Route pour la connexion d'un utilisateur
router.post('/login', userController.login);

module.exports = router;