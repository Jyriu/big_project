const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

class Professional extends Model {}

Professional.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company: {
      type: DataTypes.STRING
    },
    position: {
      type: DataTypes.STRING
    },
    years_of_experience: {
      type: DataTypes.INTEGER
    },
    skills: {
      type: DataTypes.STRING
    },
    projects: {
      type: DataTypes.TEXT
    }
}, { sequelize, modelName: 'Professional' });

// Relations User-Professional
User.hasOne(Professional, {
    foreignKey: 'user_id',
    as: 'professional'
});
Professional.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

module.exports = Professional;