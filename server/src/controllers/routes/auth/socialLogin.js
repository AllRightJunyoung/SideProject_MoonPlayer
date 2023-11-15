const axios = require("axios");
const jwt = require("../../../utils/jwt");
const { User } = require("../../../models/user");

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
  const user_Id = userId;
  let existingUser;
  try {
    existingUser = await User.findOne({ userId });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
  if (existingUser === null && userId) {
    const refresh_token = jwt.createRefreshToken();

    const createdUser = new User({
      userId: user_Id,
      refresh_token,
    });
    try {
      await createdUser.save();
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }

    const access_token = jwt.createAccessToken({
      user_Id,
    });
    res.status(200).json({
      access_token,
      refresh_token,
      expire_in: 1000 * 60 * 60,
    });
  } else {
    try {
      const user = await User.findOne({ userId });
      const user_Id = user.userId;
      const refresh_token = user.refresh_token;
      const refreshResult = await jwt.verifyRefreshToken(refresh_token, user_Id);

      if (refreshResult) {
        // refreshToken이 유효하면 액세스 토큰 생성후 보냄
        const access_token = jwt.createAccessToken({
          user_Id,
        });
        return res.status(200).json({
          access_token,
          refresh_token,
          expire_in: 1000 * 60 * 60,
        });
      } else {
        //유효하지않으면 refresh 토큰 생성후 db에다시저장
        const refresh_token = jwt.createRefreshToken();
        const access_token = jwt.createAccessToken({
          user_Id,
        });
        try {
          await User.findOneAndUpdate(
            {
              userId: user_Id,
            },
            { refresh_token: refresh_token },
            { new: true }
          );
          return res.status(200).json({
            access_token,
            refresh_token,
            expire_in: 1000 * 60 * 60,
          });
        } catch (error) {
          return res.status(500).send({ error: error.message });
        }
      }
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
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
  const user_Id = userId;

  let existingUser;
  try {
    existingUser = await User.findOne({ userId });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
  if (existingUser === null && userId) {
    const refresh_token = jwt.createRefreshToken();
    const createdUser = new User({
      userId,
      refresh_token,
    });

    try {
      await createdUser.save();
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
    const access_token = jwt.createAccessToken({
      user_Id,
    });

    return res.status(200).json({
      access_token,
      refresh_token,
      expire_in: 1000 * 60 * 60,
    });
  } else {
    try {
      const user = await User.findOne({ userId });
      const user_Id = user.userId;
      const refresh_token = user.refresh_token;
      const refreshResult = await jwt.verifyRefreshToken(refresh_token, user_Id);

      if (refreshResult) {
        // refreshToken이 유효하면 액세스 토큰 생성후 보냄
        const access_token = jwt.createAccessToken({
          user_Id,
        });
        return res.status(200).json({
          access_token,
          refresh_token,
          expire_in: 1000 * 60 * 60,
        });
      } else {
        //유효하지않으면 refresh 토큰 생성후 db에다시저장
        const refresh_token = jwt.createRefreshToken();
        const access_token = jwt.createAccessToken({
          user_Id,
        });
        try {
          await User.findOneAndUpdate(
            {
              userId: user_Id,
            },
            { refresh_token: refresh_token },
            { new: true }
          );
          return res.status(200).json({
            access_token,
            refresh_token,
            expire_in: 1000 * 60 * 60,
          });
        } catch (error) {
          return res.status(500).send({ error: error.message });
        }
      }
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
};

const naverLogin = async (req, res, next) => {
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

  const user_Id = userId;
  let existingUser;
  try {
    existingUser = await User.findOne({ userId });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
  if (existingUser === null && userId) {
    const refresh_token = jwt.createRefreshToken();
    const createdUser = new User({
      userId,
      refresh_token,
    });

    try {
      await createdUser.save();
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }

    const access_token = jwt.createAccessToken({
      user_Id,
    });

    return res.status(200).json({
      access_token,
      refresh_token,
      expire_in: 1000 * 60 * 60,
    });
  } else {
    try {
      const user = await User.findOne({ userId });
      const user_Id = user.userId;
      const refresh_token = user.refresh_token;
      const refreshResult = await jwt.verifyRefreshToken(refresh_token, user_Id);

      if (refreshResult) {
        // refreshToken이 유효하면 액세스 토큰 생성후 보냄
        const access_token = jwt.createAccessToken({
          user_Id,
        });
        return res.status(200).json({
          access_token,
          refresh_token,
          expire_in: 1000 * 60 * 60,
        });
      } else {
        //유효하지않으면 refresh 토큰 생성후 db에다시저장
        const refresh_token = jwt.createRefreshToken();
        const access_token = jwt.createAccessToken({
          user_Id,
        });
        try {
          await User.findOneAndUpdate(
            {
              userId: user_Id,
            },
            { refresh_token: refresh_token },
            { new: true }
          );
          return res.status(200).json({
            access_token,
            refresh_token,
            expire_in: 1000 * 60 * 60,
          });
        } catch (error) {
          return res.status(500).send({ error: error.message });
        }
      }
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
};

exports.kakaoLogin = kakaoLogin;
exports.googleLogin = googleLogin;
exports.naverLogin = naverLogin;
