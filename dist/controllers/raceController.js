"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRaceById = exports.getAllRaces = void 0;
const raceModel_1 = __importDefault(require("../models/raceModel"));
const getAllRaces = async (req, res) => {
    try {
        const races = await raceModel_1.default.find();
        res.status(200).json(races);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        res.status(500).json({ message: errorMessage });
    }
};
exports.getAllRaces = getAllRaces;
const getRaceById = async (req, res) => {
    try {
        const race = await raceModel_1.default.findById(req.params.id);
        if (!race)
            return res.status(404).json({ message: "Race not found" });
        res.status(200).json(race);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        res.status(500).json({ message: errorMessage });
    }
};
exports.getRaceById = getRaceById;
