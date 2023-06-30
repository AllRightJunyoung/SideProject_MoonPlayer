import { useMusicPageUIController } from 'Music/hooks';
import * as Styled from './MainHeader.styled';

export const MainHeader = ({ title }) => {
  const { isOpenAddMusicListUI, onhandleOpenAddPlayListUI } = useMusicPageUIController();

  return (
    <Styled.Layout direction="row" justifyContent="space-between" alignItems="center">
      <Styled.Title>{title}</Styled.Title>
      <Styled.IconButtonBox direction="row" gap="5px">
        <Styled.CustomIconButton
          name="plus"
          size="2x"
          color="white"
          onClick={() => {
            onhandleOpenAddPlayListUI(true);
          }}
          active={isOpenAddMusicListUI}
        />
        <Styled.CustomIconButton
          name="music"
          size="2x"
          color="white"
          onClick={() => {
            onhandleOpenAddPlayListUI(false);
          }}
          active={!isOpenAddMusicListUI}
        />
      </Styled.IconButtonBox>
    </Styled.Layout>
  );
};

export default MainHeader;
