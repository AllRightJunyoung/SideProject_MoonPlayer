const { Router } = require("express");
const authRoutes = Router();
const authController = require("../controllers/routes/auth");

authRoutes.get("/kakao", authController.kakaoLogin);
authRoutes.get("/google", authController.googleLogin);
authRoutes.get("/naver", authController.naverLogin);

module.exports = { authRoutes };
