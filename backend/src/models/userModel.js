import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { 
    type: Number, 
    required: true, 
    unique: true 
  },
  fullName: { 
    type: String, 
    required: true, 
    maxlength: 100 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    maxlength: 150 
  },
  password: { 
    type: String, 
    required: true, 
    maxlength: 255 
  },
  profile_image: { 
    type: String, 
    maxlength: 255 
  },
  bio: { 
    type: String 
  },
  location: { 
    type: String, 
    maxlength: 100 
  },
  created_at: { 
    type: Date, 
    default: Date.now 
  },
}, {timeStamp:true});

export const User = mongoose.model("Users", userSchema, "Users");