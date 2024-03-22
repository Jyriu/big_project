require('dotenv').config();
const e = require('express');
const { Sequelize } = require('sequelize');
const models = require('../models');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
});

async function createTables() {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  await sequelize.sync();
  console.log('The tables have been created successfully.');
}

// createTables().catch(console.error);

module.exports = { sequelize, createTables};