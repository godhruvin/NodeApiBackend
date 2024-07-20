import express from "express"
import mongoose from "mongoose"

const app = express();

app.get("/" , (req,res)=>{
    res.send("hello user , how are you!!!!");
})

app.listen(3000 , (req,res)=>{
    console.log("server is listening");
})