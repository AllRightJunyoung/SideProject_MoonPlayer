const { Router } = require("express");
const genreRoutes = Router();
const middleware = require("../middleware/auth");
const genreRouteControllers = require("../controllers/routes/genre");

genreRoutes.get("/genre", middleware.auth, genreRouteControllers.getGenreMusic);
genreRoutes.get("/genre/:genre_id", middleware.auth, genreRouteControllers.getMusicGenreById);

module.exports = { genreRoutes };
