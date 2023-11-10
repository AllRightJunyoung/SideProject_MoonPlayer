import { LoginForm } from 'Login/components/LoginForm';

import * as Styled from './LoginPage.styled';
import { Dialog } from 'shared/components';
const LoginPage = () => {
  return (
    <>
      <Dialog />
      <Styled.Layout direction="column" justifyContent="center" alignItems="center">
        <Styled.Box direction="column" justifyContent="center" alignItems="center">
          <Styled.Header direction="column" justifyContent="center" alignItems="center">
            <Styled.Title fontWeight="bold">Moon Player</Styled.Title>
            <Styled.CustomAvatar src="images/avatar/login.png" />
          </Styled.Header>
          <LoginForm />
        </Styled.Box>
      </Styled.Layout>
    </>
  );
};
export default LoginPage;
