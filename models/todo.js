import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "A name is required"] 
    },
    completed:{
        type:Boolean,
        required:true,
        default:false
    },
    edited:{
        type:Date,
        required:true,
        default:Date.now()
    },
    created:{
        type:Date,
        required:true,
        default:Date.now()
    },
    description:{
        type:String,
        required:false
    }
});

const ToDo = mongoose.model("Todos", todoSchema);

export default ToDo;
