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

exports.deleteTodo = (req, res) => {
    Todos.remove({_id: req.params.todoId}, (err, todo) => {
        if(err) res.send(err);
        res.send({message: "delete successfull", todo});
    });
};

exports.updateTodo = (req, res) => {
    Todos.findOneAndUpdate(req.params.id, req.body, {new: true}, (err, todo) => {
        if(err) res.send(err)
        res.json(todo);
    })
}
