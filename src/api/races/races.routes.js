const express = require("express");
const Race = require("./races.model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allRaces = await Race.find().lean();
    console.log("All races", allRaces);
    return res.status(200).json(allRaces);
  } catch (error) {
    return next(error);
  }
});

router.get("/create", async (req, res, next) => {
  try {
    const newRace = new Race(req.body);
    console.log("newRace", newRace);
    return res.status(201).json(newRace);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
