// controllers/task.controller.js
// O Controller concentra a LÓGICA de cada operação.
// Cada função aqui corresponde a uma rota, e é aqui que o Sequelize
// é usado de fato para conversar com o banco de dados.

const Task = require('../models/task.model');

// =====================================================
// CONSULTA (READ) - listar todas as tarefas
// =====================================================
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll(); // SELECT * FROM tasks
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar tarefas', error: error.message });
  }
};

// CONSULTA (READ) - buscar uma tarefa específica pelo id
exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id); // SELECT * FROM tasks WHERE id = ?

    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar tarefa', error: error.message });
  }
};

// =====================================================  
// INSERÇÃO (CREATE) - criar uma nova tarefa
// =====================================================
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'O título é obrigatório' });
    }

    const newTask = await Task.create({ title, description }); // INSERT INTO tasks (...)
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar tarefa', error: error.message });
  }
};

// =====================================================
// ALTERAÇÃO (UPDATE) - atualizar uma tarefa existente
// =====================================================
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    // UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?
    await task.update({ title, description, completed });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar tarefa', error: error.message });
  }
};

// =====================================================
// EXCLUSÃO (DELETE) - remover uma tarefa
// =====================================================
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    await task.destroy(); // DELETE FROM tasks WHERE id = ?

    res.status(200).json({ message: 'Tarefa excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir tarefa', error: error.message });
  }
};
