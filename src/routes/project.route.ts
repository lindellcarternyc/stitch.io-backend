import { Router } from "express";

import { projectController } from "../controllers/project.controller";
import verifyToken from "../middlewares/auth.middleware";

const projectRouter = Router();

projectRouter.get("/", verifyToken, projectController.getProjects);
projectRouter.get("/:id", verifyToken, projectController.getProject);
projectRouter.post("/", verifyToken, projectController.createProject);
projectRouter.post(
  "/:projectId/sections/",
  verifyToken,
  projectController.createSection
);
projectRouter.put(
  "/:projectId/sections/:id",
  verifyToken,
  projectController.updateSection
);

export default projectRouter;
