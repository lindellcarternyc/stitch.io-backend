"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSectionSchema = exports.SectionSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.SectionSchema = zod_1.default.object({
    id: zod_1.default.string(),
    projectId: zod_1.default.string(),
    name: zod_1.default.string(),
    rows: zod_1.default.number(),
    stitches: zod_1.default.number(),
});
exports.CreateSectionSchema = exports.SectionSchema.omit({ id: true }).extend({
    rows: zod_1.default.number().default(0),
    stitches: zod_1.default.number().default(0),
});
