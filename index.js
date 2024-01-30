import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import todoRoutes from "./routes/todo.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(morgan("combined"));
app.use(helmet());


app.set("views", './views');
app.set("view engine", "pug");

app.get("/home", (req, res) => {
    res.status(200).send("<h1> Hello World </h1>");
})


app.use("/todo", todoRoutes);
app.get('/pug', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })

async function connectDb(uri){
    mongoose.set('strictQuery', false);
    await mongoose.connect(uri).then(() => {
        console.log('connected');
    }, err => {
        console.log('Error: ', err);
    })
};
app.listen(3000, () => {
    connectDb(process.env.API_KEY);
    console.log("Listening at http://localhost:3000");
})



export default app;
