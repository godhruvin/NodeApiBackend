import jwt from "jsonwebtoken";

export const sendCookie = (user , res , message , statusCode = 200) => {
    const token = jwt.sign({ _id: user._id }, "bfbrjbd");
    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: 86400000,
    }).json({
        success: true,
        message
    });
}
