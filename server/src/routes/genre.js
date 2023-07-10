const { Router } = require("express");
const genreRoutes = Router();
const genreRouteControllers = require("../controllers/routes/genre");

genreRoutes.get("/genre", genreRouteControllers.getMusicGenre);
genreRoutes.get("/genre/:genre_id", genreRouteControllers.getMusicGenreById);

module.exports = { genreRoutes };
