const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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

module.exports = Post;