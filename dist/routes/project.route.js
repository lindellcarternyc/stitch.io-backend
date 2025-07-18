"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_controller_1 = __importDefault(require("../controllers/project.controller"));
const projectRouter = (0, express_1.Router)();
projectRouter.get("/", project_controller_1.default.getProjects);
projectRouter.post("/", project_controller_1.default.createProject);
exports.default = projectRouter;
