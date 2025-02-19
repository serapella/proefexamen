"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const driverSchema = new mongoose_1.default.Schema({
    driver_id: { type: String, required: true },
    name: { type: String, required: true },
    number: { type: Number, required: true },
    team_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Team",
        required: true,
    },
    countryCode: { type: String, required: true },
});
const Driver = mongoose_1.default.model("Driver", driverSchema);
exports.default = Driver;
