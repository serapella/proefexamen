import mongoose from "mongoose";

const raceResultSchema = new mongoose.Schema({
  position: Number,
  driver_id: String,
  time: Number,
  points: Number,
});

const raceSchema = new mongoose.Schema({
  round: Number,
  circuit_id: String,
  date: Date,
  sprint_race: Boolean,
  fastest_lap: String,
  race_results: [raceResultSchema],
});

const Race = mongoose.model("Race", raceSchema);

export default Race;
