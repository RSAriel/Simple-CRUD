import {taskModel} from '../models/taskModel';


const getAll = async(req, res) => {
    const tasks = await taskModel.getAll();

    return res.status(200).json(tasks);
}

const createTask = async(req, res) => {

    const createdTask = await taskModel.createTask(req.body.title);

    return res.status(201).json(createdTask[1]);
}

const deleteTask = async(req, res) => {
    const id = req.params.id;

    await taskModel.deleteTask(id);
    return res.status(204).json();
}

const updateTask = async(req, res) => {
    const  id = req.params.id;

    await taskModel.updateTask(id, req.body);
    return res.status(204).json();
}

const taskController = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}


export {taskController};