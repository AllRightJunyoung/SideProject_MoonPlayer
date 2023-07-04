const axios = require("axios");
const jwt = require("../../utils/jwt");
const User = require("../../models/user");
const HttpError = require("../../models/error");

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
    return res.status(500).send({ error: error.message });
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
    return res.status(500).send({ error: error.message });
  }

  const userId = String(userData.data.id);
  let existingUser;
  try {
    existingUser = await User.findOne({ userId });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }

  // 몽고디비에 유저가 존재하지않으면 DB에 저장
  if (existingUser === null && userId) {
    const createdUser = new User({
      userId,
    });
    try {
      await createdUser.save();
    } catch (err) {
      const error = new HttpError("DB SAVE ERROR)", 500);
      return next(error);
    }
    const access_token = jwt.createToken({
      userId,
    });
    res.status(200).json({
      access_token,
      expire_in: 1000 * 60 * 60,
    });
  } else {
    // 존재하면 토큰을 만들어서  액세스 토큰을 전송
    const access_token = jwt.createToken({
      userId,
    });
    res.status(200).json({
      access_token,
      expire_in: 1000 * 60 * 60,
    });
  }
};
const googleLogin = async (req, res, next) => {
  const { code } = req.query;
  let response;
  try {
    response = await axios({
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      url: "https://www.googleapis.com/oauth2/v4/token",
      data: makeFormData({
        grant_type: "authorization_code",
        client_id: process.env.GOOGLE_ID,
        redirect_uri: "http://localhost:3000/oauth",
        code: code,
        client_secret: process.env.GOOGLE_SECRET_ID,
      }),
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }

  const { access_token } = response.data;

  let userData; // accessToken기반으로 사용자데이터 가져옴
  try {
    userData = await axios("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
  const userId = String(userData.data.id);

  let existingUser;
  try {
    existingUser = await User.findOne({ userId });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
  if (existingUser === null && userId) {
    const createdUser = new User({
      userId,
    });
    try {
      await createdUser.save();
    } catch (err) {
      const error = new HttpError("DB SAVE ERROR)", 500);
      return next(error);
    }
    const access_token = jwt.createToken({
      userId,
    });

    res.status(200).json({
      access_token,
      expire_in: 1000 * 60 * 60,
    });
  } else {
    const access_token = jwt.createToken({
      userId,
    });
    res.status(200).json({
      access_token,
      expire_in: 1000 * 60 * 60,
    });
  }
};

const NaverLogin = async (req, res, next) => {
  const { code } = req.query;

  let response;
  try {
    response = await axios({
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      url: "https://nid.naver.com/oauth2.0/token",
      data: makeFormData({
        grant_type: "authorization_code",
        client_id: process.env.NAVER_ID,
        redirect_uri: "http://localhost:3000/oauth",
        code: code,
        client_secret: process.env.NAVER_SECRET_ID,
        state: "gasp",
      }),
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }

  const { access_token } = response.data;

  let userData; // accessToken기반으로 사용자데이터 가져옴
  try {
    userData = await axios("https://openapi.naver.com/v1/nid/me", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }

  let userId;
  if (userData) {
    userId = String(userData.data.response.id);
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ userId });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
  if (existingUser === null && userId) {
    //DB에 저장
    const createdUser = new User({
      userId,
    });
    try {
      await createdUser.save();
    } catch (err) {
      const error = new HttpError("DB SAVE ERROR)", 500);
      return next(error);
    }
    const access_token = jwt.createToken({
      userId,
    });
    res.status(200).json({
      access_token,
      expire_in: 1000 * 60 * 60,
    });
  } else {
    const access_token = jwt.createToken({
      userId,
    });
    res.status(200).json({
      access_token,
      expire_in: 1000 * 60 * 60,
    });
  }
};

exports.kakaoLogin = kakaoLogin;
exports.googleLogin = googleLogin;
exports.NaverLogin = NaverLogin;
