import z from "zod";

export const SignupSchema = z.object({
  username: z.string().nonempty(),
  email: z.email(),
  password: z.string(),
});

export const LoginSchema = SignupSchema.omit({ email: true });
