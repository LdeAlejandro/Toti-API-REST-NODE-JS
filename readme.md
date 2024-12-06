# Node.js REST API for Task Management

This project is a showcase of my skills in building REST APIs with **Node.js** and **Sequelize**. It features a task management system that allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks using SQLite as the database.

## Features

- **Get all tasks**: Retrieve a list of all tasks.
- **Get a single task**: Fetch a specific task by its ID.
- **Create a task**: Add a new task to the database.
- **Update a task**: Modify an existing task.
- **Delete a task**: Remove a task from the database.

## Technologies Used

- **Node.js**: For creating the server and handling HTTP requests.
- **Express**: As a web framework to streamline API development.
- **Sequelize**: For ORM and database interactions.
- **SQLite**: As the database for persisting tasks.

## Endpoints

### 1. Get All Tasks
**`GET /task/`**  
Fetch all tasks.  
**Response**:
- Status 200: Returns a list of tasks.
- Status 404: Returns "Tasks not found."

### 2. Get a Single Task
**`GET /task/:id`**  
Fetch a task by its ID.  
**Response**:
- Status 200: Returns the task.
- Status 404: Returns "Task not found."

### 3. Create a New Task
**`POST /task/`**  
Add a new task.  
**Request Body**:
```json
{
  "description": "task description"
}
