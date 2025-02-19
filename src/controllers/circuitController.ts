import { Request, Response } from "express";
import Circuit from "../models/circuitModel";

export const getAllCircuits = async (req: Request, res: Response) => {
  try {
    const search = req.query.search;
    const query = search ? { name: new RegExp(search as string, "i") } : {};

    const circuits = await Circuit.find(query);
    res.status(200).json(circuits);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ message: errorMessage });
  }
};
