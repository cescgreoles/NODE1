const express = require("express");
const Character = require("./characters.model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allCharacters = await Character.find();
    console.log(allCharacters);
    return res.status(200).json(allCharacters);
  } catch (error) {
    return next(error);
    // return res.status(500).json("Error en el servidor");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const characterToFind = await Character.findById(id);
    console.log(characterToFind);
    return res.status(200).json(characterToFind);
  } catch (error) {
    const customErorr = new Error("hahahahaha has sido invadido");
    return next(customErorr);
    // return res.status(500).json("No se encontró el personaje");
  }
});

//  Para crear nuevos characteres
router.post("/create", async (req, res, next) => {
  try {
    const character = req.body;
    const newCharacter = new Character(character);
    const created = await newCharacter.save();
    return res.status(201).json(created);
  } catch (error) {
    return next(error);
    // return res.status(500).json("Error al crear el personaje");
  }
});
//  Para eliminar un character con su id
router.post("/delete/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const characterToDelete = await Character.findByIdAndDelete(id);
    return (
      res.status(204),
      json("Se ha conseguido borrar el personaje", characterToDelete)
    );
  } catch (error) {
    return next(error);
    // return res.status(500).json("Error al borrar el personaje");
  }
});

module.exports = router;
