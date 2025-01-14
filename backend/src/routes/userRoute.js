
import express from "express";
//import {  Register, Login, Logout } from "../controllers/user.js";
import { register, login } from  "../controllers/authController.js";

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// router.route("/register").post(Register);
// router.route("/login").post(Login);
// router.route("/logout").get(Logout);

export default router;
//module.exports = router;