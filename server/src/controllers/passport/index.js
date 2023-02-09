const passport=require('passport')
const kakao=require('./kakao')

module.exports=()=>{
    passport.serializeUser((user,done)=>{ //req.sesstion객체에 어떤 데이터를 저장할지 정하는 메소드
        done(null,user.id) //첫번째 = 에러바운딩 , 두번쨰인자는 세션에 넘길정보
    })
    passport.deserializeUser((id,done)=>{ // 
        // db에서 유저 정보를 찾고 가져와서 done함수로 넘김
    })
}