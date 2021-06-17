const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    status: {
        type: [{
            type: String,
            enum: ['doing', 'done']
        }],
        default: ['doing']
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const Todos = mongoose.model('Todos', TodoSchema);

module.exports = Todos;