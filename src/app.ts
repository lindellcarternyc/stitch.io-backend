import express from "express";
import cors from "cors";
import projectRouter from "./routes/project.route";
import { errorHandler } from "./middlewares/errorHandler";
import authRouter from "./routes/auth.route";

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/auth", authRouter);
app.use("/api/projects", projectRouter);

// errorHandler
app.use(errorHandler);

export default app;
