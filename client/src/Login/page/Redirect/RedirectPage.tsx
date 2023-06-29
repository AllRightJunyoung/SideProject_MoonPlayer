import { getCode } from 'Login/utils/auth';
import { useEffect } from 'react';
import { getAccessToken } from 'Login/store/feature/LoginSlice';
import { useAppDispatch, useAppSelector } from 'common/hooks/useReduxStore';
import useLogin from 'Login/hooks/useLogin';

export const RedirectPage = () => {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.login);
  const code = getCode();

  const { signIn, access_token } = useLogin();

  useEffect(() => {
    const obj = {
      provider: userState.provider,
      code,
    };
    dispatch(getAccessToken(obj));
  }, []);

  if (access_token) {
    signIn();
  } else {
    return <div>로딩중..</div>;
  }
};
export default RedirectPage;
