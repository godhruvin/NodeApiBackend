import express from "express"
import userRouter from "./Routes/user.js";
import { connectDB } from "./data/db.js";
import cookieParser from "cookie-parser";

const app = express();

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
    res.send("hello user , how are you!!!!");
})

app.listen(3000, (req, res) => {
    console.log("server is listening");
})