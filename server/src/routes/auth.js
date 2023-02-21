const passport = require("passport");
const express = require("express");
const router = express.Router();
const authController = require("../controllers/routes/auth");

router.get("/kakao", authController.kakaoLogin);
router.get("/google", authController.googleLogin);

module.exports = router;
