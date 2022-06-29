const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});
connection.on("disconnected", () => console.log("MongoDB disconnected"));

const exercisesRoute = require("./routes/exercises.js");
const membersRoute = require("./routes/members.js");

app.use("/exercises", exercisesRoute);
app.use("/members", membersRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
