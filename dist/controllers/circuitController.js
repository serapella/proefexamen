"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCircuits = void 0;
const circuitModel_1 = __importDefault(require("../models/circuitModel"));
const getAllCircuits = async (req, res) => {
    try {
        const search = req.query.search;
        const query = search ? { name: new RegExp(search, "i") } : {};
        const circuits = await circuitModel_1.default.find(query);
        res.status(200).json(circuits);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        res.status(500).json({ message: errorMessage });
    }
};
exports.getAllCircuits = getAllCircuits;
