const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    priority: String,
    note: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
})

module.exports = mongoose.model('Tasks', TaskSchema)