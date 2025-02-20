import { Request, Response } from "express";
import { Race } from "../models/raceModel";
import Team from "../models/teamModel";

export const getAllRaces = async (req: Request, res: Response) => {
  try {
    const races = await Race.find();
    res.status(200).json(races);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ message: errorMessage });
  }
};

export const getRaceById = async (req: Request, res: Response) => {
  try {
    const race = await Race.findById(req.params.id);
    if (!race) return res.status(404).json({ message: "Race not found" });
    res.status(200).json(race);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ message: errorMessage });
  }
};

export const getAllTeams = async (req: Request, res: Response) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ message: errorMessage });
  }
};
