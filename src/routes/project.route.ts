import { Router } from "express";

import { projectController } from "../controllers/project.controller";

const projectRouter = Router();

projectRouter.get("/", projectController.getProjects);
projectRouter.get("/:id", projectController.getProject);
projectRouter.post("/", projectController.createProject);
projectRouter.post("/:projectId/sections/add", projectController.createSection);
projectRouter.put("/:projectId/sections/:id", projectController.updateSection);

export default projectRouter;
