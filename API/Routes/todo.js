module.exports = (app) => {
    
    const todoController = require('../Controllers/todoController');

    app.get('/', (req, res) => {
        res.send(`Todo-REST-API`);
    });

    app.route('/todos')
    .post(todoController.newTodo)
};
