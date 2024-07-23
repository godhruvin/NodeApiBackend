import User from "../models/user.js";

export const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    console.log(token);

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