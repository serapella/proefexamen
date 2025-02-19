"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const teamDriverSchema = new mongoose_1.default.Schema({
    driver_id: String,
    position: Number,
});
const teamSchema = new mongoose_1.default.Schema({
    team_id: String,
    name: String,
    principal: String,
    base: String,
    founded_year: Number,
    engine: String,
    drivers: [teamDriverSchema],
    image: String,
});
const Team = mongoose_1.default.model("Team", teamSchema);
exports.default = Team;
