import styled from 'styled-components';

import ImageIcon from 'components/Global/style/ImageIcon';
import Button from 'components/Global/style/Button/Button';
import Text from 'components/Global/style/Text';
import Flex from 'components/Global/style/Flex';
import { assignAuthURL, isOAuthName } from 'utils/auth';
import { useAppDispatch } from 'hooks/useReduxStore';
import { handleSoicalLoginProvider } from 'store/feature/user/UserSlice';

export const Form = () => {
  const dispatch = useAppDispatch();

  const handleLoginButton = (e) => {
    const name = e.target.dataset.name;
    if (!isOAuthName(name)) return;
    dispatch(handleSoicalLoginProvider(name));
    assignAuthURL(name);
  };

  return (
    <Layout direction="column" justifyContent="center" alignItems="center">
      <StyledButton color="#5c79f1" fontColor="white" onClick={handleLoginButton} data-name="google">
        <SocialLoginIcon name="Google" data-name="google" />
        <StyledText color="white" data-name="google">
          Google 로그인
        </StyledText>
      </StyledButton>
      <StyledButton color="#1cc802" fontColor="white" onClick={handleLoginButton} data-name="naver">
        <SocialLoginIcon name="Naver" />
        <StyledText color="white" data-name="naver">
          네이버 로그인
        </StyledText>
      </StyledButton>
      <StyledButton color="#ffeb3b" fontColor="black" onClick={handleLoginButton} data-name="kakao">
        <SocialLoginIcon name="Kakao" data-name="kakao" />
        <StyledText color="black" data-name="kakao">
          카카오 로그인
        </StyledText>
      </StyledButton>
    </Layout>
  );
};

const Layout = styled(Flex)`
  width: 400px;
`;

const SocialLoginIcon = styled(ImageIcon)`
  width: 30px;
  height: 30px;
`;
const StyledButton = styled(Button)`
  font-size: 20px;
  display: flex;
  width: 100%;
  align-items: center;
  height: 60px;
  border: none;
  width: 100%;

  margin-top: 20px;
  > :nth-child(2) {
    margin: 0 auto;
  }
`;
const StyledText = styled(Text)`
  font-size: 24px;
`;

export default Form;
