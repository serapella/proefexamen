"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const raceModel_1 = __importDefault(require("../models/raceModel"));
const circuitModel_1 = __importDefault(require("../models/circuitModel"));
const teamModel_1 = __importDefault(require("../models/teamModel"));
const driverModel_1 = __importDefault(require("../models/driverModel"));
dotenv_1.default.config();
const loadJSON = (filename) => {
    const filepath = path_1.default.join(__dirname, `../../${filename}`);
    return JSON.parse(fs_1.default.readFileSync(filepath, "utf-8"));
};
const seedDatabase = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/f1-api");
        await raceModel_1.default.deleteMany({});
        await circuitModel_1.default.deleteMany({});
        await teamModel_1.default.deleteMany({});
        await driverModel_1.default.deleteMany({});
        const circuits = loadJSON("circuits.json");
        const races = loadJSON("races.json");
        const teams = loadJSON("teams.json");
        const drivers = loadJSON("drivers.json");
        const insertedTeams = await teamModel_1.default.insertMany(teams);
        const teamMap = insertedTeams.reduce((map, team) => {
            if (team.name) {
                map[team.name.toLowerCase().replace(/\s+/g, "_")] = team._id;
            }
            return map;
        }, {});
        const formattedDrivers = drivers
            .map((driver) => {
            const teamObjectId = teamMap[driver.team_id?.toLowerCase().replace(/\s+/g, "_")];
            if (!teamObjectId)
                return null;
            return { ...driver, team_id: teamObjectId };
        })
            .filter((driver) => !!driver);
        await circuitModel_1.default.insertMany(circuits);
        await raceModel_1.default.insertMany(races);
        await driverModel_1.default.insertMany(formattedDrivers);
        console.log("Database seeded successfully");
        process.exit(0);
    }
    catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
};
seedDatabase();
