const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const Task = require('./models/task');

const app = express();
const sequelize = new Sequelize({ dialect: 'sqlite', storage: './task-list.db' });
const tasksModel = Task(sequelize, DataTypes);

// We need to parse JSON coming from requests
app.use(express.json());

const port = 3000;


app.get('/task/', async (req, res) => {

   const tasks = await tasksModel.findAll();

   tasks ? res.status(200).json(tasks) : res.status(404).send('Tasks not found');

    
});

app.post('/task', async (req, res) => {
    const body = req.body;
    if(body.description){
    const task  = await tasksModel.create({
        description: body.description, 
        done: false, 
        created_at: new Date(), 
        update_At: new Date()
    });
    res.status(201).json(task ) ;
} 
else if(!body || !body.description || body.drescription ===null || description.trim() === ''){
    res.status(404).send('Tasks not created, expected: \n {\n "description": "task description"\n}');
}

});

app.get('/task/:id', async (req, res) => {

    const taskId = req.params.id;
    const task = await tasksModel.findByPk(taskId)
 
    task ? res.status(200).json(task) : res.status(404).send('Tasks not found');
 });



app.patch('/task/:id', async (req, res) => {
    const taskId = req.params.id;
    const task = await tasksModel.findByPk(taskId)

    if(task){
    const body = req.body;
    if(body.description){
    task.update({
        description: body.description, 
        done: body.done, 
        updatedAt: new Date()
    })
    res.status(200).json(task);
}else if(!body || !body.description || body.drescription ===null || description.trim() === ''){
    res.status(404).send('Tasks not updated, expected: \n {\n "description": "task description"\n "done": "true"\n}');
}
else{
    res.status(404).send('Tasks not updated');
}
    }
    else {
        res.status(404).json({ error: 'Task not found' });
    }

 });

 app.delete('/task/:id', async (req, res) => {
    const taskId = req.params.id
    const task = await tasksModel.findByPk(taskId)
    if(task){
    await task.destroy({where: {id: taskId}});
    res.status(200).json({ message: 'Task deleted successfully', task });
    }
    else{
        res.status(404).json({ error: 'Task not found' });
    }
 });

 app.listen(port, () => {
    console.log(`Iniciando o ExpressJS na porta ${port}`)
  })