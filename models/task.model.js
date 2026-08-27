// models/task.model.js
// O Model é a "tradução" da tabela do banco em um objeto JavaScript.
// O Sequelize usa essa definição para criar a tabela (via sync) e
// para gerar automaticamente o SQL de SELECT, INSERT, UPDATE e DELETE.

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define(
  'Task',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: 'tasks', // nome da tabela no banco
    timestamps: true,   // cria automaticamente createdAt e updatedAt
  }
);

module.exports = Task;
