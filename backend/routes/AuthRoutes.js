import { Router } from "express";
import {loginUser} from "../controller/AuthController.js";
import {forgotPassword , verifyOtp} from '../controller/AuthController.js';

const authRouter = Router();

authRouter.post("/login", loginUser);

authRouter.post("/forgotpassword",forgotPassword)
authRouter.post("/verifyOtp", verifyOtp);

export default authRouter;
