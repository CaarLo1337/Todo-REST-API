module.exports = (app) => {
    
    const todoController = require('../Controllers/todoController');

    app.get('/', (req, res) => {
        res.send(`Todo-REST-API`);
    });

    app.route('/todos')
    .post(todoController.newTodo)
    .get(todoController.getAllTodos)

    app.route('/todos/:id')
    .get(todoController.getTodo)
    .delete(todoController.deleteTodo)
    .put(todoController.updateTodo)
};
