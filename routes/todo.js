import express from "express";
import ah from "express-async-handler";
import ToDo from "../models/todo.js";

const router = express.Router();


router.get("/", ah(async(req, res) => {
    try {
        let results = await ToDo.find();
        let resultList = '<ul class="list-none"> '
        res.status(200).send("A new Todo will be here");
    } catch (error) {
        
    }
})); 

router.post("/creation", ah(async(req, res) => {
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
        
    }
}))


export default router;
