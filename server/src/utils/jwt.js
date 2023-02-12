const jwt=require('jsonwebtoken')
const HttpError=require('../models/error')

const createToken=(user)=>{
    let token;

    try {
        token=jwt.sign({
            nickname:user.nickname,
            profile_image:user.profile_image,
            provider:user.provider
        },process.env.JWT_SECRET,{expiresIn :'1h'})
    } catch (err) {
        const error=new HttpError('정보를 읽는데 실패하였습니다. 다시 시도해주세요.')
        return next(error)
    }
    return token
}

exports.createToken=createToken
