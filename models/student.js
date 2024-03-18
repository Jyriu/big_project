const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Student extends Model {}

Student.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    establishment: {
      type: DataTypes.STRING
    },
    diploma_obtained: {
      type: DataTypes.STRING
    },
    diploma_in_progress: {
      type: DataTypes.STRING
    },
    personal_projects: {
      type: DataTypes.TEXT
    },
    career_goal: {
      type: DataTypes.STRING
    },
    preferred_it_field: {
      type: DataTypes.STRING
    }
}, { sequelize, modelName: 'Student' });

module.exports = Student;