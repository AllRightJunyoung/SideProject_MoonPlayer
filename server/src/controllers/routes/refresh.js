const { verifyAccessToken, verifyRefreshToken, decodeAccessToken, createAccessToken } = require("../../utils/jwt");

// 액세스토큰 만료시 refresh 토큰 발급해주는 API
const refreshToken = async (req, res) => {
  if (req.headers.authorization && req.headers.refresh) {
    const access_token = req.headers.authorization.split("Bearer ")[1];
    const refresh_token = req.headers.refresh;

    const accessTokenResult = verifyAccessToken(access_token);

    const decoded = decodeAccessToken(access_token);
    if (decoded === null) {
      // 액세스 토큰 검증

      res.status(401).send({
        error: "액세스토큰이 유효하지 않습니다.",
      });
    }

    const userId = decoded.userId;
    const refreshTokenResult = await verifyRefreshToken(refresh_token, userId);
    if (!accessTokenResult.valid) {
      // 검증실패
      // 1. 액세스토큰이 만료된경우
      if (accessTokenResult.message === "jwt expired") {
        if (refreshTokenResult === false) {
          //1.2  리프레쉬 토큰도 만료
          res.status(401).send({
            status: "Fail",
            message: "다시 로그인 해주세요",
          });
        }
        //1.3 리프레쉬 토큰이 만료되지않으면 새로운 액세스 토큰발급
        else {
          const new_accessToken = createAccessToken(userId);
          res.status(200).send({
            status: "success",
            access_token: new_accessToken,
            refresh_token,
          });
        }
      } else {
        //그외 검증 실패
        res.status(401).send({
          status: "Fail",
          message: "다시 로그인 해주세요",
        });
      }
    } else {
      res.status(400).send({
        status: "Fail",
        message: "액세스 토큰이 유효합니다.",
      });
    }
  } else {
    // 액세스토큰과 리프레쉬토큰이 없으면
    res.status(400).send({
      status: "Fail",
      message: "액세스토큰과 리프레쉬 토큰 헤더가 존재하지않습니다!",
    });
  }
};
