const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Student = require('./student');
const Professional = require('./professional');
const Message = require('./message');
const Topic = require('./topic');
const Post = require('./post');
const Reply = require('./reply');
const Like = require('./like');

class User extends Model {}

User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING
    },
    banner: {
      type: DataTypes.STRING
    }
}, { sequelize, modelName: 'User' });

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

// Relations User-Reply and Post-Reply
User.hasMany(Reply, {
    foreignKey: 'user_id',
    as: 'replies'
});
Reply.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
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

module.exports = User;