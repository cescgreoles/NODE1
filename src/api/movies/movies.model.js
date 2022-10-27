//  CONSTRUIMOS EL MODELO/ESQUEMA DE NUESTRA API
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moviesSchema = new Schema(
  {
    title: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number, min: 0, max: 12 },
    genre: { type: String },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("movies", moviesSchema);

module.exports = Movie;
