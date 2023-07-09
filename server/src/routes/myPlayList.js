const express = require("express");
const router = express.Router();
const myPlayListRouteControllers = require("../controllers/routes/myPlayList");

router.post("/create", myPlayListRouteControllers.createPlayList);

module.exports = router;
