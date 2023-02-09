const passport=require('passport')
const KakaoStratedy=require('passport-kakao').Strategy

module.exports=()=>{
    passport.use(new KakaoStratedy({
        clientID:process.env.KAKAO_ID,
        callbackURL:'/auth/kakao/callback'
    },async (accessToken,refreshToken,profile,done)=>{
        console.log('KAKAO PROFILE',profile)
        try {
            const exUser=1; //db로직
            if(exUser){
                done(null,exUser)
            }
            else{
                const newUser={ //db저장로직
                    email:profile._json?.kakao_account?.email,
                    nick:profile.displayName,
                    snsId:profile.id,
                    provider:'kakao'
                }
                done(null,newUser)
            }
        } catch (error) {
            console.error(error)
            done(error)
        }
    }))
}