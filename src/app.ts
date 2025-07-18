import express from "express";
import cors from "cors";
import projectRouter from "./routes/project.route";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/projects", projectRouter);

// errorHandler
app.use(errorHandler);

export default app;
