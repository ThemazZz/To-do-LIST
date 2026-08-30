
require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,     // nome do banco
  process.env.DB_USER,     // usuário do banco
  process.env.DB_PASSWORD, // senha do banco
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false, // deixe "true" se quiser ver o SQL gerado pelo Sequelize no console
  }
);

module.exports = sequelize;
