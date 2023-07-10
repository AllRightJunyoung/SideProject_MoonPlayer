const { Router } = require("express");
const myPlayListRoutes = Router();
const myPlayListRouteControllers = require("../controllers/routes/myPlayList");

myPlayListRoutes.post("/create", myPlayListRouteControllers.createPlayList);

module.exports = { myPlayListRoutes };
