import { Router } from "express";
import {
  createTask,
  renderTaksDelete,
  renderTask,
  renderTaskEdit,
  renderTaskToggle,
  renderTaskUpdate,
} from "../controllers/task.controller";
const router = Router();
router.get("/", renderTask);
router.post("/tasks/add", createTask);
router.get("/task/:id/toggleDone", renderTaskToggle);
router.get("/task/:id/edit", renderTaskEdit);
router.post("/task/:id/edit", renderTaskUpdate);
router.get("/task/:id/delete", renderTaksDelete);
export default router;
