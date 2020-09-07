import express, { text } from 'express'
import StacksController from './controllers/stacksControllers';

const routes = express.Router()

const stacksController = new StacksController();

routes.post('/stacks', stacksController.create)
routes.get('/stacks', stacksController.index)



export default routes;