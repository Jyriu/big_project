const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Post = require('./post');

class Reply extends Model {}

Reply.init({
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
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Reply'
});

// Relations User-Reply
User.hasMany(Reply, {
    foreignKey: 'user_id',
    as: 'replies'
});
Reply.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

// Relations Post-Reply
Post.hasMany(Reply, {
    foreignKey: 'post_id',
    as: 'replies'
});
Reply.belongsTo(Post, {
    foreignKey: 'post_id',
    as: 'post'
});

module.exports = Reply;