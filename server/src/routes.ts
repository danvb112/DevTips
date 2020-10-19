import express from 'express'
import StacksController from './controllers/stacksControllers';
import UsersController from './controllers/usersControllers'
import DevsController from './controllers/devsController'

const routes = express.Router()

const stacksController = new StacksController();
const usersController = new UsersController();
const devsController = new DevsController()

routes.post('/stacks', stacksController.create)
routes.get('/stacks', stacksController.index)

routes.post('/users', usersController.create)
routes.get('/users', usersController.verify)

routes.post('/devs', devsController.create)
routes.get('/devs', devsController.verify)
routes.get('/devs/:id', devsController.show)


export default routes;