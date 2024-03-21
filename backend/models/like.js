const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Post = require('./post');
const Reply = require('./reply');

class Like extends Model {}

Like.init({
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        }
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'posts',
            key: 'id',
        }
    },
    replyId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'replies',
            key: 'id',
        }
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    like: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Like',
    tableName: 'likes',
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

module.exports = Like;