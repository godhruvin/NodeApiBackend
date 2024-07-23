import User from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import jwt from "jsonwebtoken";

export const getAllUsers = async (req, res) => {
    const users = await user.find({});

    res.json({
        success: true,
        users,
    });
};

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    // if you want to find something extra then u can use select by this way....
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User Not Found with this E-mail and Password!!!!",
        });
    }

    const isFound = await bcrypt.compare(password, user.password);

    if (isFound == true) {
        sendCookie(user, res, `Welcome back , ${user.name}`, 200);
    } else {
        return res.status(404).json({
            success: false,
            message: "Invalid Email or Password...",
        });
    }
};

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
        return res.status(404).json({
            success: false,
            message: "User Already Exists",
        });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const userCreated = await User.create({
        name,
        email,
        password: hashedPassword,
    });
    sendCookie(userCreated, res, "Registered Succesfully", 201);
};

// methods to get the profile details of the logged in user.
export const getMyProfile = (req, res) => {

    res.status(200).json({
        success: true,
        message: "User founded successfully",
        user:req.user
    })
}

export const specialUser = async (req, res) => {
    res.json({
        success: true,
        message: "just joking!!!!!",
    });
};
