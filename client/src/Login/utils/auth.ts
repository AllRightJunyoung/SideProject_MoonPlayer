/* eslint-disable indent */
import axios from 'axios';
import { GOOGLE_OAUTH_URL, KAKAO_OAUTH_URL, NAVER_OAUTH_URL } from '../constants/auth';

type OAUTH_TYPE = 'google' | 'kakao' | 'naver';
type OAUTH_LOOKUP_TABLE_TYPE = { [K in OAUTH_TYPE]: string };
const OAUTH_NAME_LOOKUP_TABLE: OAUTH_LOOKUP_TABLE_TYPE = {
  google: 'google',
  kakao: 'kakao',
  naver: 'naver',
};
const OAUTH_NAME = [OAUTH_NAME_LOOKUP_TABLE.google, OAUTH_NAME_LOOKUP_TABLE.kakao, OAUTH_NAME_LOOKUP_TABLE.naver];

const OAUTH_URL_LOOKUP_TABLE: OAUTH_LOOKUP_TABLE_TYPE = {
  google: GOOGLE_OAUTH_URL,
  kakao: KAKAO_OAUTH_URL,
  naver: NAVER_OAUTH_URL,
};

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

export const isOAuthName = (name: OAUTH_TYPE): name is OAUTH_TYPE => {
  return OAUTH_NAME.includes(name);
};
export const assignAuthURL = (name: OAUTH_TYPE) => {
  const oAuthURL = OAUTH_URL_LOOKUP_TABLE[name];
  window.location.assign(oAuthURL);
};
