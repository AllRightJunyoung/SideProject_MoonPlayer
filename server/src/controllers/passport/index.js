const passport=require('passport')
const kakao=require('./strategy/kakao')
const kakaoUser=require('../../models/kakaoUser')

module.exports=()=>{
    passport.serializeUser((user,done)=>{ //로그인시만 실행 req.sesstion객체에 어떤 데이터를 저장할지 정하는 메소드
      
        done(null,user.snsId) //첫번째 = 에러바운딩 , 두번쨰인자는 세션에 넘길정보
    })
    passport.deserializeUser((id,done)=>{ // 요청시마다 passport.session미들웨어가 이메소드를 호출하고 , serializaeUser의 두번째 넣었던
        //인자가 매개변수로 들어가짐 
        // 두번째인자로 db에서 유저 정보를 찾고 가져와서 done함수로 넘김
        kakaoUser.findOne({
            snsId:id,
        }).then((user)=>done(null,user)).catch((err)=>done(err)); 
    })
    kakao()
}