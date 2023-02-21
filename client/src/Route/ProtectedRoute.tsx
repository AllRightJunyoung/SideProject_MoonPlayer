import { ReactElement, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'hooks/useReduxStore';
import { DiaLogContext } from 'context/Dialog';
import useLogin from 'hooks/useLogin';
interface ProtectedRouteProps {
  children: ReactElement;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { access_token } = useLogin();
  const dialogCtx = useContext(DiaLogContext);

  if (!access_token) {
    dialogCtx.showAlarm('로그아웃 되었습니다.');
    return <Navigate to="/" replace></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
