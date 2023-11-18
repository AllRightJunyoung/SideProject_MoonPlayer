import * as Styled from './NavBar.styled';

import { IconButton } from 'shared/components';
import { useMusicPageUIController } from 'Music/hooks';
import useLogin from 'Login/hooks/useLogin';
import { memo, useCallback } from 'react';

export const NavBar = () => {
  const { onhandleOpenCustomPlayListUI, onhandleOpenAddPlayListUI } = useMusicPageUIController();
  const { signOut } = useLogin();

  const handleBracketButton = useCallback(() => {
    signOut();
  }, []);
  const handleMusicButton = useCallback(() => {
    onhandleOpenCustomPlayListUI(true);
    onhandleOpenAddPlayListUI(true);
  }, []);

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

export default memo(NavBar);
