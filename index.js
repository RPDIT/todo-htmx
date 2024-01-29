import express from "express";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(morgan("combined"));
app.use(helmet());

app.get("/home", (req, res) => {
    res.status(200).send("<h1> Hello World </h1>");
})


app.listen(3000, () => {
    console.log("Listening at http://localhost:3000");
})

export default app;