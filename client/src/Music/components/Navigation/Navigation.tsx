import * as Styled from './Navigation.styled';

import { useContext } from 'react';

import { IconButton } from 'common/components';
import { DiaLogContext } from 'common/context/dialog';
import { useMusicPageUIController } from 'Music/components/hooks';
import { removeStoreItems } from 'common/utils/redux-persist';
import useLogin from 'Login/hooks/useLogin';

export const Navigation = () => {
  const { onhandleOpenCustomPlayListUI, onhandleOpenAddPlayListUI } = useMusicPageUIController();
  const { signOut } = useLogin();

  const handleLogOut = () => {
    signOut();
  };
  const handleOpenCustomPlayListUI = () => {
    onhandleOpenCustomPlayListUI(true);
    onhandleOpenAddPlayListUI(true);
  };

  return (
    <Styled.Layout direction="row" justifyContent="space-between" alignItems="center">
      <Styled.Header>
        <Styled.NavigationAvatar src="images/avatar/login.png" />
      </Styled.Header>
      <Styled.FlexBox direction="row">
        <IconButton name="user" color="white" size="1x" />
        <IconButton name="music" color="white" size="1x" onClick={handleOpenCustomPlayListUI} />
        <IconButton name="bracket" color="white" size="1x" onClick={handleLogOut} />
      </Styled.FlexBox>
    </Styled.Layout>
  );
};

export default Navigation;
