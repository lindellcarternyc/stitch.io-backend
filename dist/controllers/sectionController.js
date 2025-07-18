"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sectionService_1 = __importDefault(require("../services/sectionService"));
class SectionController {
    sectionService;
    constructor(sectionService = new sectionService_1.default()) {
        this.sectionService = sectionService;
    }
    createSection = async (req, res, next) => {
        const id = req.params.id;
        const { name, rows, stitches } = req.body;
        try {
            const newSection = await this.sectionService.createSection({
                id,
                ...req.body,
            });
            res.status(201).json(newSection);
        }
        catch (err) {
            next(err);
        }
    };
}
exports.default = SectionController;
