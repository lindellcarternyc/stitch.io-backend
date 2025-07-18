"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const project_service_1 = __importDefault(require("../services/project.service"));
class ProjectController {
    projectService = new project_service_1.default();
    async getProjects(req, res, next) {
        try {
            const projects = await this.projectService.getProjects();
            res.json(projects);
        }
        catch (err) {
            next(err);
        }
    }
    async createProject(req, res, next) {
        try {
            const project = await this.projectService.createProject(req.body);
            res.status(201).json(project);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = new ProjectController();
