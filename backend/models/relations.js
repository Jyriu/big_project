const User = require('./user');
const Student = require('./student');
const Professional = require('./professional');
const Message = require('./message');
const Topic = require('./topic');
const Post = require('./post');
const Reply = require('./reply');
const Like = require('./like');

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