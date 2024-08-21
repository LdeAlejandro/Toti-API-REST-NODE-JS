

# Documentação: Gerenciamento de Tarefas com Sequelize e SQLite

## Introdução

Esta documentação descreve o processo de configuração de um projeto Node.js usando Sequelize e SQLite. Inclui etapas para configurar o projeto, definir modelos, executar migrações e seeders, e iniciar o servidor.

## Passos de Configuração

### 1. Inicialização do Projeto

Inicialize o projeto Node.js e instale as dependências necessárias:

```bash
npm init
```

### 2. Instalação de Dependências

Instale as bibliotecas essenciais e ferramentas de desenvolvimento:

```bash
npm install express --save       # Instala o Express.js para criar o servidor web
npm install nodemon --save-dev   # Instala o Nodemon para reiniciar automaticamente o servidor durante o desenvolvimento
npm install --save sequelize     # Instala o Sequelize para ORM
npm install --save sqlite3       # Instala o SQLite como banco de dados
npm install --save-dev sequelize-cli # Instala o CLI do Sequelize para gerenciar migrações e seeders
```

### 3. Inicialização do Sequelize

Configure o Sequelize para seu projeto:

```bash
npx sequelize-cli init
```

Isso cria a estrutura de diretórios necessária, incluindo `config`, `models`, `migrations`, e `seeders`.

### 4. Criação do Modelo Task

Gere o modelo `Task` com os atributos `description` e `done`:

```bash
npx sequelize-cli model:generate --name Task --attributes description:string,done:boolean
```

Este comando cria um arquivo de modelo e uma migração para a tabela `Tasks`.

### 5. Geração de Seeder

Crie um seeder para popular o banco de dados com dados iniciais:

```bash
npx sequelize-cli seed:generate --name demo-tasks
```

### 6. Execução das Migrações

Aplique as migrações para criar as tabelas no banco de dados:

```bash
npx sequelize-cli db:migrate
```

### 7. Execução dos Seeders

Popule o banco de dados com dados iniciais usando o seeder:

```bash
npx sequelize-cli db:seed:all
```

### 8. Início do Servidor

Inicie o servidor de desenvolvimento com o Nodemon:

```bash
npm run dev
```

## Estrutura do Arquivo `package.json`

Certifique-se de que o arquivo `package.json` esteja configurado corretamente para o ambiente de desenvolvimento:

```json
{
  "development": {
    "storage": "task-list.db",
    "host": "127.0.0.1",
    "dialect": "sqlite"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

## Código para Seeder

Exemplo de código para popular a tabela `Tasks` com dados iniciais:

```javascript
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [{
      description: 'Lavar louça',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Comprar Pão',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Jogar lixo fora',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
```

---
