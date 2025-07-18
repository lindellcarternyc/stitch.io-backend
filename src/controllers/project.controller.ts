import { NextFunction, Request, Response } from "express";

import * as projectService from "../services/project.service";

declare global {
  namespace Express {
    interface Request {
      currentUser?: { userId: string };
    }
  }
}

class ProjectController {
  async getProjects(req: Request, res: Response, next: NextFunction) {
    try {
      const projects = await projectService.getProjects();
      res.json(projects);
    } catch (err) {
      next(err);
    }
  }

  async createProject(req: Request, res: Response, next: NextFunction) {
    console.log("createProject", req.body);
    try {
      const userId = req.currentUser?.userId;
      if (!userId) {
        res.status(401).json({ error: "Not authorized" });
      }
      const project = await projectService.createProject({
        ...req.body,
        userId,
      });
      res.status(201).json(project);
    } catch (err) {
      next(err);
    }
  }

  async getProject(req: Request, res: Response, next: NextFunction) {
    try {
      const project = await projectService.getProject(req.params.id);
      if (!project) {
        res.status(404).json({ message: "Project not found" });
      }
      res.json(project);
    } catch (err) {
      next(err);
    }
  }

  async createSection(req: Request, res: Response, next: NextFunction) {
    try {
      const section = await projectService.createSection({
        projectId: req.params.projectId,
        name: req.body.name,
      });
      res.status(201).json(section);
    } catch (err) {
      next(err);
    }
  }

  async updateSection(req: Request, res: Response, next: NextFunction) {
    try {
      const { projectId } = req.params;
      const section = await projectService.updateSection(projectId, req.body);
      res.status(203).json(section);
    } catch (err) {
      next(err);
    }
  }
}

export const projectController = new ProjectController();
