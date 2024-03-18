const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

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

module.exports = Topic;