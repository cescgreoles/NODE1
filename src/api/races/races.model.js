const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const raceSchema = new Schema(
  {
    name: { type: String, required: true },
    planet: { type: String, required: true },
    color: { type: String },
  },
  {
    timestamps: true,
  }
);

const Race = mongoose.model("races", raceSchema);

module.exports = Race;
