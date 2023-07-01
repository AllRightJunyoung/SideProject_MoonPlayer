import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'common/hooks/useReduxStore';
import { useEffect } from 'react';
import { useDialog } from 'common/hooks';
import { removeStoreItems } from 'common/utils/redux-persist';

let signOutTimer;
export const useLogin = () => {
  const navigate = useNavigate();
  const { showAlarmMessage } = useDialog();

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
  // 2. 토근 유효시간이 종료되면 로그아웃
  useEffect(() => {
    if (access_token) {
      const remainingTime = tokenExpirationTime - new Date().getTime();
      signOutTimer = setTimeout(signOut, remainingTime);
    } else {
      clearTimeout(signOutTimer);
    }
  }, [access_token, signOut]);

  return { access_token, signOut, signIn };
};
export default useLogin;
