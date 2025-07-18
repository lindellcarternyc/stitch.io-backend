import { PrismaClient } from "../generated/prisma";
import { CreateSectionSchema } from "../schema/section";

class SectionService {
  readonly prisma = new PrismaClient();

  createSection = async (data: any) => {
    try {
      const newSection = await this.prisma.section.create({
        data: CreateSectionSchema.parse(data),
      });
      return newSection;
    } catch (err) {
      throw err;
    }
  };
}

export default SectionService;
