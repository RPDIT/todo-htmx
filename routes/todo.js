import express from "express";
const router = express.Router();


router.get("/", (req, res) => {
    res.status(200).send("A new Todo will be here");
}); 

export default router;
