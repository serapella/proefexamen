import express from "express";
import { getAllRaces, getRaceById } from "../controllers/raceController";

const router = express.Router();

router.get("/", getAllRaces);
router.get("/:id", getRaceById);

export default router;
