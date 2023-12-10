import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useReduxStore';
import { useEffect } from 'react';
import { useDialog } from 'shared/hooks';
import { removeStoreItems } from 'shared/utils/redux-persist';
import { getRefreshToken } from '../api/index';
import { TokenType } from 'Login/types';
import { handleSetToken } from 'Login/store/feature/LoginSlice';

let accessTokenTimer;
export const useLogin = () => {
  const navigate = useNavigate();
  const { showAlarmMessage } = useDialog();
  const dispatch = useAppDispatch();

  const loginState = useAppSelector((state) => state.login);
  const access_token = loginState.token.access_token;
  const tokenExpirationTime = loginState.token.expire_in;

  const signIn = () => {
    navigate('/music');
    showAlarmMessage('로그인 하였습니다.');
  };
  const signOut = () => {
    localStorage.clear();
    removeStoreItems();
    showAlarmMessage('로그아웃 되었습니다.');
  };

  const refreshToken = async () => {
    try {
      const response = (await getRefreshToken()) as TokenType;
      dispatch(handleSetToken(response));
    } catch (error) {
      return;
    }
  };
  // 2. 토근 유효시간이 종료되면 리프레쉬 토큰 기반으로 액세스토큰 요청
  useEffect(() => {
    if (access_token) {
      const remainingTime = tokenExpirationTime - new Date().getTime();
      accessTokenTimer = setTimeout(refreshToken, remainingTime);
    } else {
      clearTimeout(accessTokenTimer);
    }
  }, [access_token]);

  return { access_token, signOut, signIn };
};
export default useLogin;
