const REDIRECT_URI = `http://localhost:3000/oauth`;
const {
  REACT_APP_KAKAO_CLIENT_ID: KAKAO_KEY,
  REACT_APP_GOOGLE_CLIENT_ID: GOOGLE_Client_ID,
  REACT_APP_NAVER_CLIENT_ID: NAVER_ID,
} = process.env;
export const KAKAO_OAUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const GOOGLE_OAUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_Client_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=openid%20profile%20email`;

// eslint-disable-next-line max-len
export const NAVER_OAUTH_URL = `https://nid.naver.com/oauth2.0/authorize?&response_type=code&client_id=${NAVER_ID}&redirect_uri=${REDIRECT_URI}&state=MoonPlayer`;
// export const NAVER_REQUEST_URL = `https://nid.naver.com/oauth2.0/token`;
// eslint-disable-next-line max-len
// export const NAVER_REQUEST_BODY = `grant_type=authorization_code&client_id=${NAVER_ID}&client_secret=${NAVER_Secret_ID}`;
