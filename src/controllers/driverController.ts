import { Request, Response } from "express";
import Driver from "../models/driverModel";

export const getAllDrivers = async (req: Request, res: Response) => {
  try {
    const search = req.query.search;
    const query = search ? { name: new RegExp(search as string, "i") } : {};

    const drivers = await Driver.find(query);
    res.status(200).json(drivers);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ message: errorMessage });
  }
};
