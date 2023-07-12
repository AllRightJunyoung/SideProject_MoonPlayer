import { useMusicPageUIController } from 'Music/hooks';
import * as Styled from './MainHeader.styled';
import { useAppDispatch, useAppSelector } from 'common/hooks/useReduxStore';
import { fetchMyPlayList } from 'Music/store/feature/MyPlayListSlice';

export const MainHeader = ({ title }) => {
  const { isOpenAddMusicListUI, onhandleOpenAddPlayListUI } = useMusicPageUIController();
  const accessToken = useAppSelector((state) => state.login.token.access_token);

  const dispatch = useAppDispatch();

  const handlePlusButton = () => {
    onhandleOpenAddPlayListUI(true);
  };

  const handleMusicButton = () => {
    onhandleOpenAddPlayListUI(false);
    dispatch(fetchMyPlayList({ accessToken }));
  };

  return (
    <Styled.Layout direction="row" justifyContent="space-between" alignItems="center">
      <Styled.Title>{title}</Styled.Title>
      <Styled.IconButtonBox direction="row" gap="5px">
        <Styled.CustomIconButton
          name="plus"
          size="2x"
          color="white"
          onClick={handlePlusButton}
          active={isOpenAddMusicListUI}
        />
        <Styled.CustomIconButton
          name="music"
          size="2x"
          color="white"
          onClick={handleMusicButton}
          active={!isOpenAddMusicListUI}
        />
      </Styled.IconButtonBox>
    </Styled.Layout>
  );
};

export default MainHeader;
