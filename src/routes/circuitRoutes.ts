import express from "express";
import { getAllCircuits } from "../controllers/circuitController";

const router = express.Router();

router.get("/", getAllCircuits);

export default router;
