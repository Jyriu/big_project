require('dotenv').config();
const sequelize = require('./config/database');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const userRouter = require('./routes/user_routes');
const topicRouter = require('./routes/topic_routes');
const postRouter = require('./routes/post_routes');
const replyRouter = require('./routes/reply_routes');
const likeRouter = require('./routes/like_routes');

require('./models/relations');

app.use(express.json());

app.use('/users', userRouter);
app.use('/topics', topicRouter);
app.use('/posts', postRouter);
app.use('/replies', replyRouter);
app.use('/likes', likeRouter);

// test database connection
sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

// Then, sync the database:
sequelize.sync({ force: false })
.then(() => {
  console.log('Database & tables created!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;