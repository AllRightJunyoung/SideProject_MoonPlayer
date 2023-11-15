import { TokenType } from 'Login/types';
import { Get } from 'shared/utils/axios';
const REFRESH_URI = `${process.env.REACT_APP_SERVER_URI}/api/auth/refresh`;
export const getRefreshToken = async (): Promise<TokenType | void> => {
  try {
    const response = (await Get(REFRESH_URI)) as TokenType;

    return response;
  } catch (error) {
    return;
  }
};
