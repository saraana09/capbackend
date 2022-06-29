const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.get("/", (req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", (req, res) => {
  Exercise.findByIdAndRemove(req.params.id, (err, deletedExercise) => {
    res.json(deletedExercise);
  });
});

router.put("/edit/:id", (req, res) => {
  Exercise.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, editedExercise) => res.json(editedExercise)
  );
});

router.post("/add", (req, res) => {
  Exercise.create(req.body, (err, createdExercise) => {
    res.json(createdExercise);
  });
});

router.get("/:id", (req, res) => {
  Exercise.findById(req.params.id, (err, foundExercise) => {
    res.json(foundExercise);
  });
});

module.exports = router;
