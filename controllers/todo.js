import ah from "express-async-handler";
import TodoQueries from "../queries/todo.js";


const allTodo = ah(async(req, res) => {
    try {
        let results = await TodoQueries.getAll();
        if (results.length == 0){ 
            res.status(200).send("<h1>No Todos</h1>");
        } else {
            res.status(200).render("todoTable", {todos: results});
        }
    } catch (error) {
        
    }
}); 

const newTodo = ah(async(req, res) => {
    let inputToDo = {
        name:req.body.name,
        completed:req.body.completed
    }
    if (req.body.description) {
        inputToDo['description'] = req.body.description;
    }
    try {
        let nextTodo = await TodoQueries.newTodo(inputToDo);
        res.status(200).json(nextTodo);
    } catch (error) {
       res.status(400).send("Error!" + error); 
    }
})

const completeTodo = ah(async(req, res) => {
    let id = req.params.id;
    try{
        await TodoQueries.completeTodoById(id);
        res.status(200).render("todoTable", {todos: await TodoQueries.getAll()});
    }catch (error) {
        res.status(400).send("Error!" + error);
    }
})


export default {
    allTodo,
    newTodo,
    completeTodo 
};
