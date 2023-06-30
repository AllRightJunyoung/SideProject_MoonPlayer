import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import useLogin from 'Login/hooks/useLogin';
import { useDialog } from 'common/hooks';
interface ProtectedRouteProps {
  children: ReactElement;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { access_token } = useLogin();

  const { showAlarmMessage } = useDialog();

  if (!access_token) {
    return <Navigate to="/" replace></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
