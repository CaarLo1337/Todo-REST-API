const Todos = require('../Models/todoModel');

exports.newTodo = (req, res) => {
    const createTodo = new Todos(req.body);
    createTodo.save((err, todo) => {
        if(err) res.send(err);
        res.json(todo);
    });
};

exports.getAllTodos = (req, res) => {
    Todos.find({}, (err, todo) => {
        if(err) res.send(err);
        res.json(todo);
    });
};

exports.getTodo = (req, res) => {
    Todos.findOne(req.params.todoId, (err, todo) => {
        if(err) res.send(err);
        res.json(todo);
    });
};
