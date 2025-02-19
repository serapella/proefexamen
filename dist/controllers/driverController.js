"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDrivers = void 0;
const driverModel_1 = __importDefault(require("../models/driverModel"));
const getAllDrivers = async (req, res) => {
    try {
        const search = req.query.search;
        const query = search ? { name: new RegExp(search, "i") } : {};
        const drivers = await driverModel_1.default.find(query);
        res.status(200).json(drivers);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        res.status(500).json({ message: errorMessage });
    }
};
exports.getAllDrivers = getAllDrivers;
