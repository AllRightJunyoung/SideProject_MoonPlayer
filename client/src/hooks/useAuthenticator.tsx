import { useNavigate } from 'react-router-dom';

export const useAuthenticator = () => {
  const navigate = useNavigate();

  const signIn = () => {
    const isAuthenticated = localStorage.getItem('token');
    if (!isAuthenticated) return;

    navigate('/music');
  };

  // 로그아웃
  const signOut = () => {
    localStorage.clear();
  };

  return { signIn, signOut };
};
export default useAuthenticator;
