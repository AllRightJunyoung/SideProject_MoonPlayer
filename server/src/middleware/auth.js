const { verifyAccessToken } = require("../utils/jwt");

// 액세스 토큰 검증 미들웨어
const auth = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split("Bearer ")[1];
    const result = verifyAccessToken(token);

    if (result.valid) {
      // 액세스토큰이 유효할 경우
      next();
    } else {
      if (result.message === "jwt expired") {
        res.status(401).send({
          message: "액세스 토큰이 만료되었습니다.",
        });
      } else {
        res.status(401).send({
          message: "권한이 없는 토큰입니다.",
        });
      }
    }
  } else {
    res.status(401).send({
      message: "헤더에 토큰이 존재하지 않습니다.",
    });
  }
};

exports.auth = auth;
