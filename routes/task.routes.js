

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');

router.get('/tasks', taskController.getAllTasks);       // Consulta (listar todas)
router.get('/tasks/:id', taskController.getTaskById);    // Consulta (buscar uma)
router.post('/tasks', taskController.createTask);        // Inserção
router.put('/tasks/:id', taskController.updateTask);      // Alteração
router.delete('/tasks/:id', taskController.deleteTask);   // Exclusão

module.exports = router;
