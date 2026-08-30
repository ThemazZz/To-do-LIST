
const express = require('express');
const taskRoutes = require('./routes/task.routes');

const app = express();

app.use(express.json()); // permite receber JSON no corpo das requisições

app.use('/api', taskRoutes); // todas as rotas de tarefas ficam em /api/tasks

app.get('/', (req, res) => {
  res.send('API de Tarefas (To-Do) rodando! Acesse /api/tasks');
});

module.exports = app;
