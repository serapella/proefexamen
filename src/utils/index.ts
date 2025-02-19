import mongoose from "mongoose";
import dotenv from "dotenv";
import process from "process";
import Race from "../models/raceModel";
import Circuit from "../models/circuitModel";
import Team from "../models/teamModel";
import Driver from "../models/driverModel";

dotenv.config();

interface DriverData {
  name: string;
  nationality: string;
  team_id: string;
}

const seedDatabase = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/f1-api"
    );

    await Race.deleteMany({});
    await Circuit.deleteMany({});
    await Team.deleteMany({});
    await Driver.deleteMany({});

    const circuits = require("../../circuits.json");
    const races = require("../../races.json");
    const teams = require("../../teams.json");
    const drivers: DriverData[] = require("../../drivers.json");

    const insertedTeams = await Team.insertMany(teams);

    const teamMap = insertedTeams.reduce((map, team) => {
      if (team.name) {
        map[team.name.toLowerCase().replace(/\s+/g, "_")] = team._id;
      }
      return map;
    }, {} as Record<string, mongoose.Types.ObjectId>);

    const formattedDrivers = drivers
      .map((driver) => {
        const teamObjectId =
          teamMap[driver.team_id?.toLowerCase().replace(/\s+/g, "_")];
        if (!teamObjectId) return null;
        return { ...driver, team_id: teamObjectId };
      })
      .filter(
        (driver): driver is DriverData & { team_id: mongoose.Types.ObjectId } =>
          !!driver
      );

    await Circuit.insertMany(circuits);
    await Race.insertMany(races);
    await Driver.insertMany(formattedDrivers);

    console.log("Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
