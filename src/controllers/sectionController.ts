import type { Request, Response, NextFunction } from "express";
import SectionService from "../services/sectionService";

class SectionController {
  constructor(readonly sectionService = new SectionService()) {}

  createSection = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const { name, rows, stitches } = req.body;

    try {
      const newSection = await this.sectionService.createSection({
        id,
        ...req.body,
      });
      res.status(201).json(newSection);
    } catch (err) {
      next(err);
    }
  };

  // getSections = (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     res.json(sections);
  //   } catch (err) {
  //     next(err);
  //   }
  // };

  // getSectionById = (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const id = parseInt(req.params.id);
  //     const section = sections.find((section) => section.id === id);
  //     if (!section) {
  //       res.status(404).json({ message: "Section not founc." });
  //       return;
  //     }
  //     return res.json(section);
  //   } catch (err) {
  //     next(err);
  //   }
  // };

  // updateSection = (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const id = parseInt(req.params.id);
  //     const sectionIdx = sections.findIndex((section) => section.id === id);
  //     if (sectionIdx === -1) {
  //       res.status(404).json({ message: "Section not founc" });
  //       return;
  //     }
  //     sections[sectionIdx] = req.body;
  //     res.json(sections[sectionIdx]);
  //   } catch (err) {
  //     next(err);
  //   }
  // };

  // deleteSection = (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const id = parseInt(req.params.id);
  //     const sectionIdx = sections.findIndex((section) => section.id === id);
  //     if (sectionIdx === -1) {
  //       res.status(404).json({ message: "Section not founc" });
  //     }
  //     const deletedSection = sections.splice(sectionIdx, 1)[0];
  //     res.json(deletedSection);
  //   } catch (err) {
  //     next(err);
  //   }
  // };
}

export default SectionController;
