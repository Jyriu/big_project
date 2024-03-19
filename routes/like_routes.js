const express = require('express');
const router = express.Router();
const likeController = require('../controllers/like_controller');

router.post('/', likeController.createLike);
router.get('/post/:postId', likeController.getLikesForPost);
router.get('/reply/:replyId', likeController.getLikesForReply);
router.delete('/:id', likeController.deleteLike);

module.exports = router;