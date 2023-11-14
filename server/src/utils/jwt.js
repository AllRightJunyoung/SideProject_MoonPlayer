const jwt = require("jsonwebtoken");
const { User } = require("../models");

//accessToken 생성
const createAccessToken = (user) => {
  let token;
  const payload = {
    userId: user.userId,
  };

  try {
    token = jwt.sign(payload, process.env.JWT_SECRET, {
      algorithm: "HS256",
      expiresIn: "1h",
    });
  } catch (error) {
    return next(error);
  }
  return token;
};
const createRefreshToken = () => {
  //refreshToken 생성
  const refreshToken = jwt.sign({}, process.env.JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: "14d",
  });
  return refreshToken;
};
const verifyRefreshToken = async (refresh_token, userId) => {
  try {
    user = await User.findOne({ userId });

    if (user !== null && refresh_token === user.refresh_token) {
      try {
        jwt.verify(refresh_token, process.env.JWT_SECRET);
        return true;
      } catch (error) {
        return false;
      }
    }
  } catch (error) {
    return false;
  }
};

// const verfiyAccessToken = (token) => {
//   let decoded = null;
//   try {
//     decoded = jwt.verify(token, process.env.JWT_SECRET);
//     return {
//       ok: true,
//       id: decoded.id,
//       role: decoded.role,
//     };
//   } catch (error) {
//     return {
//       ok: false,
//       message: error.message,
//     };
//   }
// };

exports.createAccessToken = createAccessToken;
// exports.verfiyAccessToken = verfiyAccessToken;
exports.createRefreshToken = createRefreshToken;
exports.verifyRefreshToken = verifyRefreshToken;
