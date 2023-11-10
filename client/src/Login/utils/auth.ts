/* eslint-disable indent */
import axios from 'axios';
import { GOOGLE_OAUTH_URL, KAKAO_OAUTH_URL, NAVER_OAUTH_URL } from '../constants/auth';
import type { Oauth_LOOKUP_TABLE_type, Oauth_type } from 'Login/types';

import { reportError } from 'shared/utils/error';

const OAUTH_NAME_LOOKUP_TABLE: Oauth_LOOKUP_TABLE_type = {
  google: 'google',
  kakao: 'kakao',
  naver: 'naver',
};
const OAUTH_NAME = [OAUTH_NAME_LOOKUP_TABLE.google, OAUTH_NAME_LOOKUP_TABLE.kakao, OAUTH_NAME_LOOKUP_TABLE.naver];

const OAUTH_URL_LOOKUP_TABLE: Oauth_LOOKUP_TABLE_type = {
  google: GOOGLE_OAUTH_URL,
  kakao: KAKAO_OAUTH_URL,
  naver: NAVER_OAUTH_URL,
};

export const getToken = async (REQUEST_URI: string) => {
  try {
    const response = await axios.get(REQUEST_URI);
    return response;
  } catch (error) {
    return reportError(error);
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

export const isOAuthName = (name: Oauth_type): name is Oauth_type => {
  return OAUTH_NAME.includes(name);
};
export const assignAuthURL = (name: Oauth_type) => {
  const oAuthURL = OAUTH_URL_LOOKUP_TABLE[name];
  window.location.assign(oAuthURL);
};
