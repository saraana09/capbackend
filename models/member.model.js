const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const memberSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timeStamps: true,
  }
);

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
