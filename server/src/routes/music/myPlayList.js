const { Router } = require("express");

const myPlayListRoutes = Router();
const myPlayListRouteControllers = require("../../controllers/routes/music/myPlayList");
const createMyPlayListValidation = require("../../utils/validator");
const accessTokenValidation = require("../../utils/validator");

myPlayListRoutes.post("/create", createMyPlayListValidation, myPlayListRouteControllers.createMyPlayList);
myPlayListRoutes.post("/get", accessTokenValidation, myPlayListRouteControllers.getMyPlayListNameList);
myPlayListRoutes.delete("/delete/:title", myPlayListRouteControllers.deleteMyPlayList);
module.exports = { myPlayListRoutes };
