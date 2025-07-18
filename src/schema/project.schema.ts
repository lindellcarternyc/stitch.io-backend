import z from "zod";

export const CreateProjectSchema = z.object({
  userId: z.string().nonempty(),
  name: z.string().nonempty(),
});
