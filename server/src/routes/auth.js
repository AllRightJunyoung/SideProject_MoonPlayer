const express = require("express");
const router = express.Router();
const authController = require("../controllers/routes/auth");

router.get("/kakao", authController.kakaoLogin);
router.get("/google", authController.googleLogin);
router.get("/naver", authController.NaverLogin);
module.exports = router;
