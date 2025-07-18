import { PrismaClient, Section } from "../generated/prisma";
import { CreateProjectSchema } from "../schema/project.schema";

const prisma = new PrismaClient();

export const createProject = async (data: any) => {
  const projectData = CreateProjectSchema.parse(data);
  return await prisma.project.create({ data: projectData });
};

export const getProjects = async () => {
  return await prisma.project.findMany();
};

export const getProject = async (id: string) => {
  return await prisma.project.findFirst({
    include: {
      sections: true,
    },
    where: { id },
  });
};

export const createSection = async (data: {
  projectId: string;
  name: string;
}) => {
  return await prisma.section.create({ data });
};

export const updateSection = async (
  projectId: string,
  data: Partial<Section>
) => {
  return await prisma.section.update({
    where: { id: data.id },
    data: {
      ...data,
      projectId,
    },
  });
};
