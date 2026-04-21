// models/Service.js
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: String,
  price: Number,
  features: [String],
});

export default mongoose.model("Service", serviceSchema);