const passport=require('passport')
const express=require('express')
const router = express.Router();


router.get('/kakao',passport.authenticate('kakao'))

router.get('/kakao/callback',passport.authenticate('kakao',{
    failureRedirect:'/',
}),(req,res)=>{
    res.redirect('/music')
})



module.exports=router