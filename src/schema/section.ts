import z from "zod";

export const SectionSchema = z.object({
  id: z.string(),
  projectId: z.string(),
  name: z.string(),
  rows: z.number(),
  stitches: z.number(),
});

export type Section = z.infer<typeof SectionSchema>;

export const CreateSectionSchema = SectionSchema.omit({ id: true }).extend({
  rows: z.number().default(0),
  stitches: z.number().default(0),
});

export type CreateSection = z.infer<typeof CreateSectionSchema>;
