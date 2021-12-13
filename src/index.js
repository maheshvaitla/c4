const express = require("express");

const app = express();

const movieController = require("./controllers/movies.controller");
const showController = require("./controllers/shows.controller");
const userController = require("./controllers/user.controller");
const theatreController = require("./controllers/theatre.controller");
const seatController = require("./controllers/seats.controller");
const screenController = require("./controllers/screens.controller");

app.use("/users", userController);
app.use("/movies", movieController);
app.use("/shows", showController);
app.use("/theatres", theatreController);
app.use("/seats", seatController);
app.use("/screens", screenController);

app.use(express.json())

module.exports =app;