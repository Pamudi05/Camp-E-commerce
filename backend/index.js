import express from "express";
import cors from "cors";
import { connectToDatabase } from "./db/dbConnection.js";
import userRouter from './routes/UserRoutes.js'
import authRouter from './routes/AuthRoutes.js'

const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:3000"
}));

const PORT = 5000;

app.use("/api/v1/users/", userRouter);
app.use("/api/v1/auth/", authRouter);

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
  });
}).catch(err => {
    console.log("Error Occur : ", err);
    process.exit(0);
});
