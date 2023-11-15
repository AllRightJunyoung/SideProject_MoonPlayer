const { Router } = require("express");
const authRoutes = Router();
const socialLoginController = require("../../controllers/routes/auth/socialLogin");

const refreshController = require("../../controllers/routes/auth/refresh");

authRoutes.get("/kakao", socialLoginController.kakaoLogin);
authRoutes.get("/google", socialLoginController.googleLogin);
authRoutes.get("/naver", socialLoginController.naverLogin);
authRoutes.get("/refresh", refreshController.refreshToken);

module.exports = { authRoutes };
