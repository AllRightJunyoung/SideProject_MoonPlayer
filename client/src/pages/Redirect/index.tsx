import { getCode, getToken } from 'utils/auth';
import { useEffect, useState } from 'react';
import { getAccessToken } from 'store/feature/user/UserSlice';
import { useAppDispatch, useAppSelector } from 'hooks/useReduxStore';
import { useNavigate } from 'react-router-dom';

export const RedirectPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userState = useAppSelector((state) => state.user);
  const code = getCode();
  const access_token = userState.access_token;

  useEffect(() => {
    if (access_token) {
      navigate('/music');
    }
    const obj = {
      provider: userState.provider,
      code,
    };
    dispatch(getAccessToken(obj));
  }, [access_token]);
  return <div>로딩중..</div>;
};
export default RedirectPage;
