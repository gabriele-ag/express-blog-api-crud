import express from "express";
import postRouter from "./routers/posts.js";
import routeNotFound from "./middlewares/routeNotFound.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express()
const port = 3000

app.use(express.static("public"));
app.use(express.json());

app.use(loggingMiddleware)

app.get("/", (req, res) => {
    const resData = {
        data: "Server del mio blog",
    }
    
    res.json(resData)
})

app.use("/posts", postRouter)


app.use(routeNotFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server in ascolto nella porta ${port}`);
});






