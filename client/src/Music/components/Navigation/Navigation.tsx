import * as Styled from './Navigation.styled';

import { IconButton } from 'common/components';
import { useMusicPageUIController } from 'Music/hooks';
import useLogin from 'Login/hooks/useLogin';

export const Navigation = () => {
  const { onhandleOpenCustomPlayListUI, onhandleOpenAddPlayListUI } = useMusicPageUIController();
  const { signOut } = useLogin();

  const handleBracketButton = () => {
    signOut();
  };
  const handleMusicButton = () => {
    onhandleOpenCustomPlayListUI(true);
    onhandleOpenAddPlayListUI(true);
  };

  return (
    <Styled.Layout direction="row" justifyContent="space-between" alignItems="center">
      <Styled.Header>
        <Styled.NavigationAvatar src="images/avatar/login.png" />
      </Styled.Header>
      <Styled.FlexBox direction="row">
        <IconButton name="music" color="white" size="1x" onClick={handleMusicButton} />
        <IconButton name="bracket" color="white" size="1x" onClick={handleBracketButton} />
      </Styled.FlexBox>
    </Styled.Layout>
  );
};

export default Navigation;
