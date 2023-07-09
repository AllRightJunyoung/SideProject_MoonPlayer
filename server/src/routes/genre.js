const express = require("express");
const router = express.Router();
const genreRouteControllers = require("../controllers/routes/genre");

router.get("/genre", genreRouteControllers.getMusicGenre);
router.get("/genre/:genre_id", genreRouteControllers.getMusicGenreById);

module.exports = router;
