//  CONSTRUIMOS EL MODELO/ESQUEMA DE NUESTRA API
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moviesSchema = new Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: false },
    director: { type: String, required: true },
    year: { type: Number },
    genre: { type: String },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("movies", moviesSchema);

module.exports = Movie;
