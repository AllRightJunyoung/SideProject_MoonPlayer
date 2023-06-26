import { useContext } from 'react';

import * as Styled from './Navigation.styled';

import { IconButton } from 'common/components';
import useMusicPageUIControl from 'hooks/useMusicPageUIControl';
import { DiaLogContext } from 'common/context/dialog';
import { removeStoreItems } from 'utils/redux-persist';

export const Navigation = () => {
  const dialogCtx = useContext(DiaLogContext);

  const { onhandleOpenCustomPlayListUI, onhandleOpenAddPlayListUI } = useMusicPageUIControl();
  const handleLogOut = () => {
    dialogCtx.showAlarm('로그아웃 되었습니다.');
    removeStoreItems();
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
