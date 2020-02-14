const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://lourival:atlasmongodb@cluster0-xiq6l.mongodb.net/tasks?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)