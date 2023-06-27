import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'common/hooks/useReduxStore';
import { useEffect, useContext } from 'react';
import { DiaLogContext } from '../../common/context/dialog';

let signOutTimer;
export const useLogin = () => {
  const navigate = useNavigate();
  const dialogCtx = useContext(DiaLogContext);
  const userState = useAppSelector((state) => state.user);
  const access_token = userState.token.access_token;
  const tokenExpirationTime = userState.token.expire_in;

  // 1. 토큰이 존재할때 로그인

  useEffect(() => {
    if (!access_token) return;
    navigate('/music');
    dialogCtx.showAlarm('로그인 하였습니다.');
  }, [access_token]);

  // 로그아웃
  const signOut = () => {
    localStorage.clear();
  };
  // 2. 토근 유효시간이 종료되면 로그아웃
  useEffect(() => {
    if (access_token) {
      const remainingTime = tokenExpirationTime - new Date().getTime();
      signOutTimer = setTimeout(signOut, remainingTime);
    } else {
      clearTimeout(signOutTimer);
    }
  }, [access_token, signOut]);

  return { access_token, signOut };
};
export default useLogin;
