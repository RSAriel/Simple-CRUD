import express from 'express'
import {taskController} from '../controllers/taskController';
import {taskMiddleware} from '../middlewares/taskMiddleware';

const router = express.Router();

router.get('/tasks', taskController.getAll);
router.post('/tasks', taskMiddleware.validateFieldTitle, taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id',
    taskMiddleware.validateFieldTitle, 
    taskMiddleware.validateFieldStatus, 
    taskController.updateTask)
export {router};
