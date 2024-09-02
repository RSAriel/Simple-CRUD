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

const taskModel= {
    getAll,
    createTask
}

export {taskModel};