import { useMusicPageUIController } from 'Music/hooks';
import * as Styled from './CustomPlayListHeader.styled';
import { useAppDispatch } from 'shared/hooks/useReduxStore';
import { getMyPlayList } from 'Music/store/feature/MyPlayListSlice';

const CustomPlayListHeader = ({ title }) => {
  const { isOpenAddMusicListUI, onhandleOpenAddPlayListUI } = useMusicPageUIController();

  const dispatch = useAppDispatch();

  const handlePlusButton = () => {
    onhandleOpenAddPlayListUI(true);
  };

  const handleMusicButton = () => {
    onhandleOpenAddPlayListUI(false);
    dispatch(getMyPlayList());
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

export default CustomPlayListHeader;
