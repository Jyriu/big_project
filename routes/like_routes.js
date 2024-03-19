const express = require('express');
const router = express.Router();
const likeController = require('../controllers/like_controller');
const { body } = require('express-validator');
const authenticateJWT = require('../middleware/authenticateJWT');

router.post('/', 
    authenticateJWT,
    [
        body('type').isIn(['post', 'reply']).withMessage('Type must be either "post" or "reply"'),
        body('like').isBoolean().withMessage('Like must be a boolean')
    ],
    likeController.createLike
);
router.get('/post/:postId', likeController.getLikesForPost);
router.get('/reply/:replyId', likeController.getLikesForReply);
router.delete('/:id', 
    authenticateJWT,
    likeController.deleteLike
);

module.exports = router;