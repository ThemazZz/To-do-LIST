# To-Do API

API REST para cadastro de tarefas (To-Do List), desenvolvida com **Node.js**, **Express** e **Sequelize (ORM)**, utilizando **PostgreSQL** como banco de dados. Projeto acadêmico com foco na aplicação dos conceitos de **MVC**, rotas, controllers, models e ORM.

## Integrantes

- Matheus Henrique de Souza
- Kaike de Lima Barbosa

## Funcionalidades (CRUD)

| Operação  | Método HTTP | Rota            | Função Sequelize        |
|-----------|-------------|-----------------|--------------------------|
| Consulta  | GET         | /api/tasks      | `Task.findAll()`         |
| Consulta  | GET         | /api/tasks/:id  | `Task.findByPk()`        |
| Inserção  | POST        | /api/tasks      | `Task.create()`          |
| Alteração | PUT         | /api/tasks/:id  | `task.update()`          |
| Exclusão  | DELETE      | /api/tasks/:id  | `task.destroy()`         |

## Estrutura do projeto (MVC)

```
todo-api/
├── config/
│   └── database.js       # Configuração da conexão com o PostgreSQL
├── models/
│   └── task.model.js      # Model Task (define a tabela)
├── controllers/
│   └── task.controller.js # Lógica do CRUD (consulta, inserção, alteração, exclusão)
├── routes/
│   └── task.routes.js     # Rotas da API
├── app.js                 # Configuração do Express
├── server.js              # Ponto de entrada / conexão com o banco
├── .env.example            # Exemplo de variáveis de ambiente
└── package.json
```
