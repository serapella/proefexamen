"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const raceResultSchema = new mongoose_1.default.Schema({
    position: Number,
    driver_id: String,
    time: Number,
    points: Number,
});
const raceSchema = new mongoose_1.default.Schema({
    round: Number,
    circuit_id: String,
    date: Date,
    sprint_race: Boolean,
    fastest_lap: String,
    race_results: [raceResultSchema],
});
const Race = mongoose_1.default.model("Race", raceSchema);
exports.default = Race;
