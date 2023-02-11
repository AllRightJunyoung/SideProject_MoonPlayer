/* eslint-disable indent */
import axios from 'axios';
import { GOOGLE_OAUTH_URL, KAKAO_OAUTH_URL, NAVER_OAUTH_URL } from '../../constants/auth';
export const getToken = async (REQUEST_URI: string) => {
  try {
    const response = await axios.get(REQUEST_URI);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getCode = (): string => {
  const url = new URL(window.location.href).searchParams;
  const code = url.get('code');
  if (code === null) {
    return '';
  }
  return code;
};

export const assignAuthURL = (name: string) => {
  const oAuthURL = name === 'google' ? GOOGLE_OAUTH_URL : name === 'kakao' ? KAKAO_OAUTH_URL : NAVER_OAUTH_URL;
  window.location.assign(oAuthURL);
};
