import { TokenType } from 'Login/types';
import { Get } from 'shared/utils/axios';
const REFRESH_URI = `${process.env.REACT_APP_SERVER_URI}/api/auth/refresh`;
export const getRefreshToken = async (): Promise<TokenType | void> => {
  try {
    const response = (await Get(REFRESH_URI)) as TokenType;
    localStorage.setItem(
      'token',
      JSON.stringify({ access_token: response.access_token, refresh_token: response.refresh_token })
    );
    return response;
  } catch (error: any) {
    return;
  }
};
