const { Router } = require("express");
const myPlayListRoutes = Router();
const myPlayListRouteControllers = require("../controllers/routes/myPlayList");

myPlayListRoutes.post("/create", myPlayListRouteControllers.createMyPlayList);
myPlayListRoutes.post("/get", myPlayListRouteControllers.getMyPlayListNameList);
myPlayListRoutes.delete("/delete/:title", myPlayListRouteControllers.deleteMyPlayList);
module.exports = { myPlayListRoutes };
