const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.SERVER_PORT || 5000;

const TodosRoutes = require("./src/app/Todos/TodosRoutes");
const PostRoutes = require("./src/app/Posts/PostRoute");

const app = express();

app.use(express.json());
app.use(cors({
    allowedHeaders : "*",
    origin : "*"
}));

app.use("/api/v1/todos", TodosRoutes);
app.use("/api/v1/posts", PostRoutes);

app.listen(port, ()=>{
    console.log(`server started http://localhost:${port}`);
})

