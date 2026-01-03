import express from "express";
import { connectToDatabase } from "./db/dbConnection.js";

const app = express();

app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Server is running");
});

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
  });
}).catch(err => {
    console.log("Error Occur : ", err);
    process.exit(0);
});
