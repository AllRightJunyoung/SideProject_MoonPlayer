const axios = require("axios");
const jwt = require("../../utils/jwt");
const User = require("../../models/kakaoUser");

const makeFormData = (params) => {
  const searchParams = new URLSearchParams();
  Object.keys(params).forEach((key) => {
    searchParams.append(key, params[key]);
  });
  return searchParams;
};
const kakaoLogin = async (req, res, next) => {
  const { code } = req.query;
  let response;
  try {
    response = await axios({
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      url: "https://kauth.kakao.com/oauth/token",
      data: makeFormData({
        grant_type: "authorization_code",
        client_id: process.env.KAKAO_ID,
        redirect_uri: "http://localhost:3000/oauth",
        code: code,
        client_secret: process.env.KAKAO_SECRET_ID,
      }),
    });
  } catch (error) {
    console.log(error);
    return;
  }

  const { access_token } = response.data;

  let userData; // accessToken기반으로 사용자데이터 가져옴
  try {
    userData = await axios("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ userId: userData.data.id });
  } catch (error) {
    console.log(error);
  }
  if (existingUser === null) {
    //DB에 저장
    const createdUser = new User({
      userId: userData.data.id,
      nickname: userData.data.properties.nickname,
      profile_image: userData.data.properties.profile_image,
      provider: "kakao",
    });
    try {
      await createdUser.save();
    } catch (err) {
      const error = new HttpError("DB SAVE ERROR)", 500);
      return next(error);
    }
    const access_token = jwt.createToken({
      nickname: userData.data.properties.nickname,
      profile_image: userData.data.properties.profile_image,
      provider: "kakao",
    });
    res.status(200).json({
      access_token,
      expire_in: 1000 * 60 * 60,
    });
  } else {
    const access_token = jwt.createToken({
      nickname: existingUser.nickname,
      profile_image: existingUser.profile_image,
      provider: "kakao",
    });
    res.status(200).json({
      access_token,
      expire_in: 1000 * 60 * 60,
    });
  }
};

exports.kakaoLogin = kakaoLogin;
