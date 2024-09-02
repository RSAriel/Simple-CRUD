import express from 'express'
import {taskController} from '../controllers/taskController';
const router = express.Router();

router.get('/tasks', taskController.getAll);
router.post('/tasks', taskController.createTask);

export {router};
