const express=require('express')
const router = express.Router();

const authRouteControllers=require('../controllers/routes/auth')



router.get('/kakao',authRouteControllers.kakaoLogin)
router.get('/kakao/callback',authRouteControllers.kakaoLoginCallback)

module.exports=router