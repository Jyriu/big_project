const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

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

module.exports = Professional;