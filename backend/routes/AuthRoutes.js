import { Router } from "express";
import {loginUser} from "../controller/AuthController.js";
import {forgotPassword , verifyOtp , resetPassword} from '../controller/AuthController.js';

const authRouter = Router();

authRouter.post("/login", loginUser);

authRouter.post("/forgotpassword",forgotPassword)
authRouter.post("/verifyOtp", verifyOtp);
authRouter.post("/resetpassword", resetPassword);

export default authRouter;
