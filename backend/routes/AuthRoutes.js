import { Router } from "express";
import {loginUser} from "../controller/AuthController.js";

const authRouter = Router();

authRouter.post("/login", loginUser);

export default authRouter;
