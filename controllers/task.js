import { Task } from "../models/task.js";

export const newTask = async (req, res) => {
    const { title, description } = req.body;
    const  task = await Task.create({title , description , user:req.user});

    res.status(200).json({
        success:true,
        message:"Task created successfully",
    })
}

export const getMyTask = async (req, res) => {
    const user = req.user._id;
    const myTask = await Task.find({user : user._id});

    res.status(200).json({
        success:true,
        message:"Your Task Found Successfully...",
        task:myTask
    })
}
export const updateTask = async (req, res , next) => {
    const task = await Task.findById(req.params.id);
    task.isCompleted = !task.isCompleted;
    await task.save();

    res.status(200).json({
        success:true,
        message:"Your Task Updated",
    })

}
export const deleteTask = async (req, res , next) => {
    const task = await Task.findById(req.params.id);
    await task.deleteOne();

    res.status(200).json({
        success:true,
        message:"Your Task deleted",
    })

}