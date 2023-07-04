const express = require("express");
const router = express.Router();
const musicRouteControllers = require("../controllers/routes/music");

router.get("/genre", musicRouteControllers.getMusicGenre);
router.get("/genre/:genre_id", musicRouteControllers.getMusicGenreById);
router.post("/create/playList/", musicRouteControllers.createPlayList);

module.exports = router;
