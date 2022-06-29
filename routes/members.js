const router = require("express").Router();
let Member = require("../models/member.model.js");

router.post("/add", (req, res) => {
  Member.create(req.body, (err, createdMember) => {
    res.json(createdMember);
  });
});

router.get("/", (req, res) => {
  Member.find({}, (err, foundMember) => {
    res.json(foundMember);
  });
});

module.exports = router;
