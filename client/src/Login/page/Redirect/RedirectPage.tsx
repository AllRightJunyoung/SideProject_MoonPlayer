import { getCode } from 'Login/utils/auth';
import { useEffect } from 'react';
import { getAccessToken } from 'Login/store/feature/LoginSlice';
import { useAppDispatch, useAppSelector } from 'common/hooks/useReduxStore';

export const RedirectPage = () => {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.login);
  const code = getCode();

  useEffect(() => {
    const obj = {
      provider: userState.provider,
      code,
    };
    dispatch(getAccessToken(obj));
  }, []);
  return <div>로딩중..</div>;
};
export default RedirectPage;
