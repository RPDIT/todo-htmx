import Todo from "../models/todo.js";


async function getAll() {
    return await Todo.find();
};

async function getById(id) {
    return await Todo.findById(id);
};
async function newTodo(obj) {
    return await new Todo(obj).save();
};
async function completeTodoById(id) {
    let dbTodo = await getById(id);
    dbTodo.completed = !dbTodo.completed;
    dbTodo.save();
    return dbTodo;
};

export default {
    getAll,
    getById,
    newTodo,
    completeTodoById
};
