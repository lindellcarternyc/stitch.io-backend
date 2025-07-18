"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../generated/prisma");
const project_schema_1 = require("../schema/project.schema");
class ProjectService {
    prisma = new prisma_1.PrismaClient();
    async getProjects() {
        return await this.prisma.project.findMany();
    }
    async createProject(data) {
        const projectData = project_schema_1.CreateProjectSchema.parse(data);
        return await this.prisma.project.create({ data: projectData });
    }
}
exports.default = ProjectService;
