import ah from "express-async-handler";
import ToDo from "../models/todo.js";



const allTodo = ah(async(req, res) => {
    try {
        let results = await ToDo.find();
        res.status(200).render("todoTable", {todos: results});
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
        let nextTodo = new ToDo(inputToDo);
        await nextTodo.save();
        res.status(200).json(nextTodo);
    } catch (error) {
       res.status(400).send("Error!" + error); 
    }
})


export default {
    allTodo,
    newTodo,
};
