import express from "express";
import { getRaces } from "../controllers/raceController";

const router = express.Router();

router.get("/", getRaces);
//router.get("/:id", getRaceById);

export default router;
