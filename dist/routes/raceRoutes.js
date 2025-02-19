"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const raceController_1 = require("../controllers/raceController");
const router = express_1.default.Router();
router.get("/", raceController_1.getAllRaces).get("/:id", raceController_1.getRaceById);
exports.default = router;
