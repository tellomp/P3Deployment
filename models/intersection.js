const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const intersectionSchema = new Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  State: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Intersection = mongoose.model("Intersection", intersectionSchema);

module.exports = Intersection;
