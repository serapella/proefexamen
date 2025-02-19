import { Request, Response } from "express";
import Race from "../models/raceModel";

// Get all races
export const getAllRaces = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const races = await Race.find();
    res.status(200).json(races);
  } catch (error) {
    console.error("Error fetching races:", error);
    res
      .status(500)
      .json({ message: "Server error", error: (error as Error).message });
  }
};

// Get race by ID
export const getRaceById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const race = await Race.findById(req.params.id);
    if (!race) {
      res.status(404).json({ message: "Race not found" });
      return;
    }
    res.status(200).json(race);
  } catch (error) {
    console.error("Error fetching race by ID:", error);
    res
      .status(500)
      .json({ message: "Server error", error: (error as Error).message });
  }
};
