const express = require("express");
const Movie = require("./movies.model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allMovies = await Movie.find();
    console.log(allMovies);
    return res.status(200).json(allMovies);
  } catch (error) {
    return next(error);
    // return res.status(500).json("Error en el servidor");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const movieToFind = await Movie.findById(id);
    console.log(movieToFind);
    return res.status(200).json(movieToFind);
  } catch (error) {
    const customErorr = new Error("hahahahaha has sido invadido");
    return next(customErorr);
    // return res.status(500).json("No se encontró el personaje");
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const movie = req.body;
    const newMovie = new Movie(movie);
    const created = await newMovie.save();
    return res.status(201).json(created);
  } catch (error) {
    return next(error);
    // return res.status(500).json("Error al crear el personaje");
  }
});

router.post("/delete/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const movieToDelete = await Movie.findByIdAndDelete(id);
    return (
      res.status(204),
      json("Se ha conseguido borrar el personaje", movieToDelete)
    );
  } catch (error) {
    return next(error);
    // return res.status(500).json("Error al borrar el personaje");
  }
});

module.exports = router;
