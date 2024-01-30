import express from "express";
import TodoController from "../controllers/todo.js";
const router = express.Router();


router.get("/", TodoController.allTodo); 
router.post("/creation", TodoController.newTodo); 


export default router;
