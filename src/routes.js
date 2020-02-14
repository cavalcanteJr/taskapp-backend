const express = require('express')

const SessionController = require('./controllers/SessionController')
const TaskController = require('./controllers/TaskController')

const routes = express.Router()

routes.post('/sessions', SessionController.store)
routes.post('/tasks', TaskController.store)
routes.get('/tasks', TaskController.index)

module.exports = routes;