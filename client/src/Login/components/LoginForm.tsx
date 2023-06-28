import * as Styled from './LoginForm.styled';

import { assignAuthURL, isOAuthName } from 'Login/utils/auth';
import { useAppDispatch } from 'common/hooks/useReduxStore';
import { handleSoicalLoginProvider } from 'Login/store/feature/LoginSlice';

export const LoginForm = () => {
  const dispatch = useAppDispatch();

  const handleLoginButton = (e) => {
    const name = e.target.dataset.name;
    if (!isOAuthName(name)) return;
    dispatch(handleSoicalLoginProvider(name));
    assignAuthURL(name);
  };

  return (
    <Styled.Layout direction="column" justifyContent="center" alignItems="center">
      <Styled.FormButton color="#5c79f1" fontColor="white" onClick={handleLoginButton} data-name="google">
        <Styled.Icon src="images/socialLogin/google.svg" />
        <Styled.ButtonText color="white" data-name="google">
          Google 로그인
        </Styled.ButtonText>
      </Styled.FormButton>

      <Styled.FormButton color="#1cc802" fontColor="white" onClick={handleLoginButton} data-name="naver">
        <Styled.Icon src="images/socialLogin/naver.png" />
        <Styled.ButtonText color="white" data-name="naver">
          네이버 로그인
        </Styled.ButtonText>
      </Styled.FormButton>
      <Styled.FormButton color="#ffeb3b" fontColor="black" onClick={handleLoginButton} data-name="kakao">
        <Styled.Icon src="images/socialLogin/kakao.svg" />
        <Styled.ButtonText color="black" data-name="naver">
          카카오 로그인
        </Styled.ButtonText>
      </Styled.FormButton>
    </Styled.Layout>
  );
};

export default LoginForm;
