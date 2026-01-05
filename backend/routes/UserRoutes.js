import { Router } from "express";
import {registerUser} from '../controller/UserController.js';

const userRouter = Router();

userRouter.post("/create",registerUser)

export default userRouter;