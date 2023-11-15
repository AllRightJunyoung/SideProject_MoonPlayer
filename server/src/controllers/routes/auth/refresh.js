const { verifyAccessToken, verifyRefreshToken, decodeAccessToken, createAccessToken } = require("../../../utils/jwt");

// 액세스토큰 과 refresh 토큰기반으로 액세스토큰 발급해주는 API
const refreshToken = async (req, res) => {
  if (req.headers.authorization && req.headers.refresh) {
    const access_token = req.headers.authorization.split("Bearer ")[1];
    const refresh_token = req.headers.refresh.split("Bearer ")[1];

    const accessTokenResult = verifyAccessToken(access_token);

    const decoded = decodeAccessToken(access_token);

    if (decoded === null) {
      res.status(401).send({
        result: {
          message: "액세스토큰이 유효하지 않습니다.",
        },
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
            result: {
              message: "refreshToken expired",
            },
          });
        }
        //1.3 리프레쉬 토큰이 만료되지않으면 새로운 액세스 토큰발급
        else {
          const new_accessToken = createAccessToken({
            user_Id: userId,
          });
          res.status(200).send({
            result: {
              access_token: new_accessToken,
              refresh_token,
              expire_in: 1000 * 60 * 60,
            },
          });
        }
      } else {
        //그외 검증 실패
        res.status(401).send({
          result: {
            message: "다시 로그인 해주세요",
          },
        });
      }
    } else {
      res.status(400).send({
        result: {
          message: "액세스 토큰이 유효합니다.",
        },
      });
    }
  } else {
    // 액세스토큰과 리프레쉬토큰이 없으면

    res.status(400).send({
      result: {
        message: "액세스토큰 헤더가 존재하지않습니다!",
      },
    });
  }
};
exports.refreshToken = refreshToken;
