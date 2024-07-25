import express from "express"
import userRouter from "./Routes/user.js";
import { connectDB } from "./data/db.js";
import cookieParser from "cookie-parser";
import taskRouter from "./Routes/task.js";
import cors from "cors";

const app = express();

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))

app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

app.get("/", (req, res) => {
    res.send("hello user , how are you!!!!");
})

app.listen(3000, (req, res) => {
    console.log("server is listening");
})