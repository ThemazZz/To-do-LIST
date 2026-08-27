// server.js
// Ponto de entrada da aplicação: conecta ao banco, sincroniza os
// models (cria as tabelas se não existirem) e sobe o servidor.

require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/database');
require('./models/task.model'); // garante que o model seja carregado

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    await sequelize.sync(); // cria a tabela "tasks" automaticamente se não existir
    console.log('Modelos sincronizados com o banco de dados.');

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
}

start();
