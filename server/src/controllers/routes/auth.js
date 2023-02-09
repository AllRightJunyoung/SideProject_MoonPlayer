const passport=require('passport')


const kakaoLogin=()=>{
    passport.authenticate('kakao')
}
const kakaoLoginCallback=()=>{
    passport.authenticate('kakao',{
        failureRedirect:'/'
    }),(req,res)=>{
        res.redirect('/music')
    }
}
exports.kakaoLogin=kakaoLogin
exports.kakaoLoginCallback=kakaoLoginCallback