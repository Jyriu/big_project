const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Topic = require('./topic');
const Like = require('./like');

class Post extends Model {}

Post.init({
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    topic_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
}, { sequelize, modelName: 'Post' });

// Relations User-Post
User.hasMany(Post, {
    foreignKey: 'user_id',
    as: 'posts'
});
Post.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

// Relations Topic-Post
Topic.hasMany(Post, {
    foreignKey: 'topic_id',
    as: 'posts'
});
Post.belongsTo(Topic, {
    foreignKey: 'topic_id',
    as: 'topic'
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

module.exports = Post;