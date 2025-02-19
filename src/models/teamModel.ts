import mongoose from "mongoose";

const teamDriverSchema = new mongoose.Schema({
  driver_id: String,
  position: Number,
});

const teamSchema = new mongoose.Schema({
  team_id: String,
  name: String,
  principal: String,
  base: String,
  founded_year: Number,
  engine: String,
  drivers: [teamDriverSchema],
  image: String,
});

const Team = mongoose.model("Team", teamSchema);

export default Team;
