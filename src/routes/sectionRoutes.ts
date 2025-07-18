import { Router } from "express";
import {
  createSection,
  deleteSection,
  getSectionById,
  getSections,
  updateSection,
} from "../controllers/sectionController";

const router = Router();

router.get("/", getSections);
router.get("/:id", getSectionById);
router.post("/", createSection);
router.put("/:id", updateSection);
router.delete("/:id", deleteSection);

export default router;
