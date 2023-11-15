import { getCode } from 'Login/utils/auth';
import { useEffect } from 'react';
import { getToken } from 'Login/store/feature/LoginSlice';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useReduxStore';

import useLogin from 'Login/hooks/useLogin';
import { Spinner } from 'shared/components';

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
    dispatch(getToken(obj));
  }, []);

  if (access_token) {
    signIn();
    return <></>;
  } else {
    return <Spinner />;
  }
};
export default RedirectPage;
