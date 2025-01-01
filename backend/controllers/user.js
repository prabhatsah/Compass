import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";

export const Register = async (req, res) => {
    try {
      const { fullName, email, password } = req.body;
      if (!fullName || !email || !password) {
        return req.status(401).json({
          message: "Invalid data",
          success: false,
        });
      }
      const user = await User.findOne({ email });
      if (user) {
        return res.status(401).json({
          message: "This email is already used",
          success: false,
        });
      }
  
      const hashedPassword = await bcryptjs.hash(password, 10);
  
      const newUser = await User.create({
        fullName,
        email,
        password: hashedPassword,
      });
  
      return res.status(201).json({
        message: "Account created successfully",
        success: true,
        user: {
          id: newUser._id,
          fullName: newUser.fullName,
          email: newUser.email,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };