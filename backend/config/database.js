require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
});

async function createTables() {
  const User = require('../models/user');
  const Topic = require('../models/topic');

  await User.sync({ force: true });
  await Topic.sync({ force: true });
  console.log('Database & tables created!');
}

createTables().catch(console.error);

module.exports = sequelize;