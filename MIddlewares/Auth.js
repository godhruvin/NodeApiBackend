import User from "../models/user.js";
import jwt from "jsonwebtoken";

// middleware to check if user is authenticated before accessing protected routes
export const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "User is not logged in!!!!"
        })
    }
    const decoded = jwt.verify(token, "bfbrjbd");
    req.user = await User.findById(decoded._id);
    next();
}