import express, { Request, Response } from "express";
import { Driver } from "../models/driverModel";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
