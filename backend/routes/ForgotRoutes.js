import { Router } from "express";
import {forgotPassword} from '../controller/AuthController.js';

const forgotRouter = Router();

forgotRouter.post("/forgotpassword",forgotPassword)

export default forgotRouter;