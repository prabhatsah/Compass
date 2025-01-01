import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
}, {timeStamp:true});

export const User = mongoose.model("User", userScheme);