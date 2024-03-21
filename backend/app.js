require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const { createTables } = require('./config/database');

createTables()
  .then(() => {

    const userRouter = require('./routes/user_routes');
    const topicRouter = require('./routes/topic_routes');
    const postRouter = require('./routes/post_routes');
    const replyRouter = require('./routes/reply_routes');
    const likeRouter = require('./routes/like_routes');

    app.use(express.json());

    app.use('/users', userRouter);
    app.use('/topics', topicRouter);
    app.use('/posts', postRouter);
    app.use('/replies', replyRouter);
    app.use('/likes', likeRouter);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(console.error);