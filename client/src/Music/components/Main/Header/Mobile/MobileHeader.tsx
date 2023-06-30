import * as Styled from './MobileHeader.styled';
import { useMusicPageUIController } from 'Music/hooks';

export const MobileHeader = () => {
  const { onhandleOpenMusicListUI, isOpenMusicList } = useMusicPageUIController();

  return (
    <Styled.Layout direction="row" justifyContent="space-between" alignItems="center">
      <Styled.Title
        active={isOpenMusicList}
        onClick={() => {
          onhandleOpenMusicListUI(true);
        }}
      >
        M U S I C L I S T
      </Styled.Title>
      <Styled.Title
        active={!isOpenMusicList}
        onClick={() => {
          onhandleOpenMusicListUI(false);
        }}
      >
        P L A Y L I S T
      </Styled.Title>
    </Styled.Layout>
  );
};

export default MobileHeader;
