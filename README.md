# To-Do API

API REST para cadastro de tarefas (To-Do List), desenvolvida com **Node.js**, **Express** e **Sequelize (ORM)**, utilizando **PostgreSQL** como banco de dados. Projeto acadêmico com foco na aplicação dos conceitos de **MVC**, rotas, controllers, models e ORM.

## Integrantes

- Nome do integrante 1
- Nome do integrante 2
- Nome do integrante 3

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

## Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone <link-do-repositorio>
   cd todo-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um banco PostgreSQL chamado `todo_db` (ou o nome que preferir).

4. Copie o arquivo de exemplo de variáveis de ambiente e edite com seus dados:
   ```bash
   cp .env.example .env
   ```

5. Rode o servidor:
   ```bash
   npm start
   ```

6. A API estará disponível em `http://localhost:3000`. As rotas de tarefas ficam em `http://localhost:3000/api/tasks`.

## Testando as rotas

Pode usar Insomnia, Postman ou Thunder Client (extensão do VS Code):

- **GET** `http://localhost:3000/api/tasks` — lista todas as tarefas
- **POST** `http://localhost:3000/api/tasks` — cria uma tarefa (body JSON: `{ "title": "Estudar Sequelize", "description": "Revisar CRUD" }`)
- **PUT** `http://localhost:3000/api/tasks/1` — atualiza a tarefa de id 1
- **DELETE** `http://localhost:3000/api/tasks/1` — exclui a tarefa de id 1
