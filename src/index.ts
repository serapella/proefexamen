import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import raceRoutes from "./routes/raceRoutes";
import teamRoutes from "./routes/teamRoutes";
import driverRoutes from "./routes/driverRoutes";
import circuitRoutes from "./routes/circuitRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Use Routes
app.use("/races", raceRoutes);
app.use("/teams", teamRoutes);
app.use("/drivers", driverRoutes);
app.use("/circuits", circuitRoutes);

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
