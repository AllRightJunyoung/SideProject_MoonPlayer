// const { getRequestForOauth,getOAuthToken } = require("../../utils/auth")
const qs=require('qs')
const jwt=require('jsonwebtoken')
const axios=require('axios')


const kakaoLogin=async (req,res,next)=>{
   const {code}=req.query
    let response;
    try {
        response= await axios({
            method:'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
              },
            url:'https://kauth.kakao.com/oauth/token',
            data:qs.stringify({
                grant_type:'authorization_code',
                client_id:process.env.KAKAO_ID,
                redirect_uri:'http://localhost:3000/oauth',
                code,
            })
        })
    } catch (error) {
       console.log(error)        
    }

    const {access_token,expires_in}=response.data

    let userData;
    // accessToken기반으로 사용자데이터 가져옴
    try {
        userData=await axios('https://kapi.kakao.com/v2/user/me',({
            headers:{
                Authorization: `Bearer ${access_token}`,
            },
        }))
    } catch (error) {
        console.log(error)
    }
    console.log(userData)
    console.log(userData.data.id,userData.properties)
    // 요거기반으로 식별값 사용하기
    
//    res.status(200).json({
//     token:response.data.access_token,
//     expires_in:response.data.expires_in,
//    })
}

exports.kakaoLogin=kakaoLogin
