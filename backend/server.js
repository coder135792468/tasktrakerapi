import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import tasksRoute from "./routes/tasksRoute.js";
import { notfound, errorHandler } from "./middlewares/errorHandler.js";
dotenv.config();

connectDB();
const app = express();
app.use(express.json());

app.use("/api/tasks", tasksRoute);

app.use(notfound);
app.use(errorHandler);
app.listen(5000, console.log("Server is Running!!!".yellow.bold));
