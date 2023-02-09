const passport=require('passport')
const KakaoStratedy=require('passport-kakao').Strategy
const kakaoUser=require('../../../models/kakaoUser')

const findUser=async (profile)=>{
    let exUser;
    try {
        exUser=await kakaoUser.findOne({
            snsId:profile.id,
            provider:'kakao'
        }); //db로직
    } catch (error) {
        console.error(error)
    }
    return exUser
}
const createUser=async (profile)=>{
    const newUser=await kakaoUser.create({ //db저장로직
        email:profile._json?.kakao_account?.email,
        nick:profile.displayName,
        snsId:profile.id,
        provider:'kakao'
    })
    return newUser
}

module.exports=()=>{
    passport.use(new KakaoStratedy({
        clientID:process.env.KAKAO_ID,
        callbackURL:'/auth/kakao/callback'
    },async (accessToken,refreshToken,profile,done)=>{
        try {
            const exUser=await findUser(profile)
            if(exUser){
                done(null,exUser)
            }
            else{
                const newUser=await createUser(profile)
                await newUser.save()
                done(null,newUser)
            }
        } catch (error) {
            console.error(error)
            done(error)
        }
    }))
}