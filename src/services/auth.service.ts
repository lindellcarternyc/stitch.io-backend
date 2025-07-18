import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import { LoginSchema, SignupSchema } from "../schema/auth.schema";
import { PrismaClient } from "../generated/prisma";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("NO JWT KEY");
}

const SALT_ROUNDS = 10;

const prisma = new PrismaClient();

export const signup = async (input: any) => {
  const data = SignupSchema.parse(input);
  const password = await bcrypt.hash(data.password, SALT_ROUNDS);

  const user = await prisma.user.create({
    data: {
      ...data,
      password,
    },
  });

  const token = jwt.sign({ userId: user.id }, JWT_SECRET);
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    token,
  };
};

export const login = async (input: any) => {
  const data = LoginSchema.parse(input);
  const user = await prisma.user.findFirst({
    where: { username: data.username },
  });

  if (!user) {
    throw new Error("Login Error.");
  }

  const passwordsMatch = await bcrypt.compare(data.password, user.password);
  if (!passwordsMatch) {
    throw new Error("Login Error.");
  }

  const token = jwt.sign({ userId: user.id }, JWT_SECRET);

  return { id: user.id, username: user.username, email: user.email, token };
};
