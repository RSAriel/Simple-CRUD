import {taskModel} from '../models/taskModel';


const getAll = async(req, res) => {

    const tasks = await taskModel.getAll();

    return res.status(200).json(tasks);
}

const createTask = async(req, res) => {

    const createdTask = await taskModel.createTask(req.body.title);

    return res.status(201).json(res);
}

const taskController = {
    getAll,
    createTask
}

export {taskController};