import Task from "../models/task.js";
import asyncHandler from "express-async-handler";

// @desc fetch all tasks
//@route GET /api/tasks/
//@access public
const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({});
  res.json(tasks);
});

//@desc fetch task by id
//@route GET /api/tasks/:id
//@acess public
const getTaskById = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

//@desc add a task
//@route POST /api/tasks/
//@access public
const addTask = asyncHandler(async (req, res) => {
  const task = new Task();
  task.name = req.body.name || "untitled";
  task.description = req.body.description || "Sample description";
  const createdTask = await task.save();
  res.status(201).json(createdTask);
});

//@desc update a Task
//@routes PUT /api/tasks/:id
//@access public
const updateTask = asyncHandler(async (req, res) => {
  const { name, description, checked } = req.body;

  const task = await Task.findById(req.params.id);

  if (task) {
    task.name = name;
    task.checked = checked;
    task.description = description;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } else {
    res.status(404);
    throw new Error("Task not found");
  }
});

//@desc delete a Task
//@routes DELETE /api/tasks/:id
//@access public
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    await task.remove();
    res.json({
      message: "Task Removed successfully",
    });
  } else {
    res.staus(404);
    throw new Error("Task not found");
  }
});

export { getAllTasks, addTask, updateTask, deleteTask, getTaskById };
