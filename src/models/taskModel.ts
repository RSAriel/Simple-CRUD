import connection from "./connection";

const getAll = async() => {
    const tasks = await connection.query("SELECT * FROM tasks");
    return tasks.rows;
}

const createTask = async(task) => {
    const title = task;
    const createdTask = await connection.query("INSERT INTO tasks(title, status) VALUES($1, $2)", [title, 'pendente']);

    return createdTask;
}

const deleteTask = async(id) => {
    const deletedTask = await connection.query("DELETE FROM tasks WHERE id = $1", [id]);
    return deletedTask;
}

const updateTask = async(id, task) => {
    const {title, status} = task;
    const updatedTask = await connection.query("UPDATE tasks SET title = $1, status = $2 WHERE id = $3", [title, status, id]);
    return updatedTask;
}

const taskModel= {
    getAll,
    createTask,
    deleteTask,
    updateTask
}

export {taskModel};