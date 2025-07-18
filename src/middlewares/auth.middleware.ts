import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Extend Express Request type to include currentUser
declare global {
  namespace Express {
    interface Request {
      currentUser?: { userId: string };
    }
  }
}

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });
  if (!JWT_SECRET) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    req.currentUser = { userId: decoded.userId };
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

export default verifyToken;
