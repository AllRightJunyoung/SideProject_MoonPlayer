import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/useReduxStore';
import { useEffect, useContext } from 'react';
import { DiaLogContext } from '../context/Dialog/index';

export const useLogin = () => {
  const navigate = useNavigate();
  const dialogCtx = useContext(DiaLogContext);
  const userState = useAppSelector((state) => state.user);
  const access_token = userState.token.access_token;

  useEffect(() => {
    if (!access_token) return;
    navigate('/music');
    dialogCtx.showAlarm('로그인 하였습니다.');
  }, [access_token]);

  // 로그아웃
  const signOut = () => {
    localStorage.clear();
  };

  return { access_token, signOut };
};
export default useLogin;
