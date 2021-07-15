import express from "express";
import {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
  getTaskById,
} from "../controllers/tasksController.js";
const router = express.Router();

router.route("/").get(getAllTasks).post(addTask);
router.route("/:id").get(getTaskById).put(updateTask).delete(deleteTask);

export default router;
