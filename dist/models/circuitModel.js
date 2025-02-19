"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const locationSchema = new mongoose_1.default.Schema({
    country: String,
    city: String,
});
const circuitSchema = new mongoose_1.default.Schema({
    circuit_id: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    location: { type: locationSchema, required: true },
    length_km: { type: Number, required: true },
    turns: { type: Number, required: true },
});
const Circuit = mongoose_1.default.model("Circuit", circuitSchema);
exports.default = Circuit;
