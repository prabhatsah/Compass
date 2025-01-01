import express from "express";
import dorenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";

databaseConnection();

dorenv.config({
    path: ".env"
})

const app = express();
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//api
app.get("/", (req, res)=>{
    res.status(200).json({
        message:"Your message",
        success:true
    })
})
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`)
});
