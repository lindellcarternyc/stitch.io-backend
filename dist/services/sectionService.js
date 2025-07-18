"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../generated/prisma");
const section_1 = require("../schema/section");
class SectionService {
    prisma = new prisma_1.PrismaClient();
    createSection = async (data) => {
        try {
            const newSection = await this.prisma.section.create({
                data: section_1.CreateSectionSchema.parse(data),
            });
            return newSection;
        }
        catch (err) {
            throw err;
        }
    };
}
exports.default = SectionService;
