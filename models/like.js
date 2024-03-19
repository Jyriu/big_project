const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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

module.exports = Like;