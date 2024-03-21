const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Post = require('./post');

class Topic extends Model {}

Topic.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
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
    }
}, { sequelize, modelName: 'Topic' });

// Relation User-Topic
User.hasMany(Topic, {
    foreignKey: 'user_id',
    as: 'topics'
});
Topic.belongsTo(User, {
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

module.exports = Topic;