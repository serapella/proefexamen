import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  country: String,
  city: String,
});

const circuitSchema = new mongoose.Schema({
  circuit_id: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: locationSchema, required: true },
  length_km: { type: Number, required: true },
  turns: { type: Number, required: true },
});

const Circuit = mongoose.model("Circuit", circuitSchema);

export default Circuit;
