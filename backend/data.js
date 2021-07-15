import colors from "colors";
import Task from "../backend/models/task.js";
import { tasks } from "./sampleData/tasks.js";
import connectDB from "../backend/utils/db.js";
import dotenv from "dotenv";
dotenv.config();
connectDB();

const sendData = async () => {
  try {
    await Task.deleteMany();
    const createdTasks = await Task.insertMany(tasks);
    console.log("Data Added to Database".green.bold.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Task.deleteMany();
    console.log("Data Deleted from Database".red.bold.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  sendData();
}
