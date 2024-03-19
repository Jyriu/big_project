require('dotenv').config();
const sequelize = require('./models/database');
const User = require('./models/user');
const Student = require('./models/student');
const Professional = require('./models/professional');
const Message = require('./models/message');
const Topic = require('./models/topic');
const Post = require('./models/post');
const Reply = require('./models/reply');
const Like = require('./models/like');
const userRouter = require('./routes/user_routes');
const topicRouter = require('./routes/topic_routes');
const postRouter = require('./routes/post_routes');
const replyRouter = require('./routes/reply_routes');
const likeRouter = require('./routes/like_routes');

app.use('/users', userRouter);
app.use('/topics', topicRouter);
app.use('/posts', postRouter);
app.use('/replies', replyRouter);

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Relations User-Student
User.hasOne(Student, {
    foreignKey: 'user_id',
    as: 'student'
});
Student.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

// Relations User-Professional
User.hasOne(Professional, {
    foreignKey: 'user_id',
    as: 'professional'
});
Professional.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

// Relations User-Message
User.hasMany(Message, {
    foreignKey: 'sender_id',
    as: 'sentMessages'
});
Message.belongsTo(User, {
    foreignKey: 'sender_id',
    as: 'sender'
});

User.hasMany(Message, {
    foreignKey: 'receiver_id',
    as: 'receivedMessages'
});
Message.belongsTo(User, {
    foreignKey: 'receiver_id',
    as: 'receiver'
});

// Relation User-Topic
User.hasMany(Topic, {
    foreignKey: 'user_id',
    as: 'topics'
});
Topic.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

// Relations User-Post and Topic-Post
User.hasMany(Post, {
    foreignKey: 'user_id',
    as: 'posts'
});
Post.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

Topic.hasMany(Post, {
    foreignKey: 'topic_id',
    as: 'posts'
});
Post.belongsTo(Topic, {
    foreignKey: 'topic_id',
    as: 'topic'
});

// Relations User-Reply and Post-Reply
User.hasMany(Reply, {
    foreignKey: 'user_id',
    as: 'replies'
});
Reply.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

Post.hasMany(Reply, {
    foreignKey: 'post_id',
    as: 'replies'
});
Reply.belongsTo(Post, {
    foreignKey: 'post_id',
    as: 'post'
});

// Relations User-Like
User.hasMany(Like, {
    foreignKey: 'userId',
    as: 'likes'
});
Like.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

// Relations Post-Like
Post.hasMany(Like, {
    foreignKey: 'postId',
    as: 'likes'
});
Like.belongsTo(Post, {
    foreignKey: 'postId',
    as: 'post'
});

// Relations Reply-Like
Reply.hasMany(Like, {
    foreignKey: 'replyId',
    as: 'likes'
});
Like.belongsTo(Reply, {
    foreignKey: 'replyId',
    as: 'reply'
});

// Then, sync the database:
sequelize.sync({ force: false })
.then(() => {
  console.log('Database & tables created!');
});

app.use(express.json());
app.use('/users', userRouter);
app.use('/likes', likeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = {
    User,
    Student,
    Professional,
    Message,
    Topic,
    Post,
    Reply
};