import { getCode, getToken } from 'utils/auth';
import { useEffect, useState } from 'react';
import { sendAuthCode } from 'store/feature/user/userSlice';
import { useAppDispatch, useAppSelector } from 'hooks/useReduxStore';

export const RedirectPage = () => {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.user);
  const code = getCode();
  useEffect(() => {
    const obj = {
      provider: userState.provider,
      code,
    };
    dispatch(sendAuthCode(obj));
  }, []);
  return <div>로딩중..</div>;
};
export default RedirectPage;
