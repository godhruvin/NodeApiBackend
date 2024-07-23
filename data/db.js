import mongoose from "mongoose"

export const connectDB = () => {
    mongoose.connect(`mongodb+srv://dhruvinmehta53:hello123world@backendpractice.llgpqpo.mongodb.net/?retryWrites=true&w=majority&appName=backendPractice`, {
        dbName: "BackendUsers",
    }).then(() => console.log("Database Connected Successfully...."))
        .catch((e) => console.log(e));

}