import express from 'express'
import StacksController from './controllers/stacksControllers';
import UsersController from './controllers/usersControllers'

const routes = express.Router()

const stacksController = new StacksController();
const usersController = new UsersController();

routes.post('/stacks', stacksController.create)
routes.get('/stacks', stacksController.index)

routes.post('/users', usersController.create)


export default routes;