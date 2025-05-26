import express from "express";
import postRouter from "./routers/posts.js";

const app = express()
const port = 3000

app.use(express.static("public"));

app.get("/", (req, res) => {
    const resData = {
        data: "Server del mio blog",
    }

    res.json(resData)
})

app.use("/posts", postRouter)

app.listen(port, () => {
    console.log(`Server in ascolto nella porta ${port}`);
});






