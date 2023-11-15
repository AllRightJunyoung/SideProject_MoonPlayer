const { Router } = require("express");
const genreRoutes = Router();
const authMiddleWare = require("../../middleware/auth");

const genreRouteControllers = require("../../controllers/routes/music/genre");

genreRoutes.get("/genre", authMiddleWare.auth, genreRouteControllers.getGenreMusic);
genreRoutes.get("/genre/:genre_id", authMiddleWare.auth, genreRouteControllers.getMusicGenreById);

module.exports = { genreRoutes };
