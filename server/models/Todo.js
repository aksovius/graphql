const mongoose = require('mongoose');

const TodoSchema= new mongoose.Schema({
    title: { type: String },
});

module.exports = mongoose.model('Todo', TodoSchema);