const passport=require('passport')
const express=require('express')
const router = express.Router();
const jwt=require('jsonwebtoken')


router.get('/kakao',passport.authenticate('kakao'))

router.get('/kakao/callback',passport.authenticate('kakao',{
    failureRedirect:'/',
}),(req,res)=>{
    const payload={
        email:req.user.email,
        nickname:req.user.nick
    }
    const expire={expiresIn:'1h'}
    const token=jwt.sign(payload,process.env.JWT_SECRET,expire)
    res.json({
        token:token
    })
})



module.exports=router