const { Router } = require("express");
const authMiddleWare = require("../../middleware/auth");
const userPlayListRoutes = Router();
const userPlayListRouteControllers = require("../../controllers/routes/music/userPlayList");

userPlayListRoutes.post("/post", authMiddleWare.auth, userPlayListRouteControllers.createUserPlayList);
userPlayListRoutes.get("/get", authMiddleWare.auth, userPlayListRouteControllers.getUserPlayList);
userPlayListRoutes.delete("/delete/:title", authMiddleWare.auth, userPlayListRouteControllers.deleteUserPlayList);
module.exports = { userPlayListRoutes };
