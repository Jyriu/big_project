const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

class Message extends Model {}

Message.init({
  sender_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  receiver_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, { sequelize, modelName: 'Message' });

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

module.exports = Message;