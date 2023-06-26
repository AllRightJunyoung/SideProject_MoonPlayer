import * as Styled from './MobileHeader.styled';

import { useMusicPageUIControl } from 'hooks/useMusicPageUIControl';

export const MobileHeader = () => {
  const { onhandleMusicListUI, isOpenMusicList } = useMusicPageUIControl();

  return (
    <Styled.Layout direction="row" justifyContent="space-between" alignItems="center">
      <Styled.Title
        active={isOpenMusicList}
        onClick={() => {
          onhandleMusicListUI(true);
        }}
      >
        M U S I C L I S T
      </Styled.Title>
      <Styled.Title
        active={!isOpenMusicList}
        onClick={() => {
          onhandleMusicListUI(false);
        }}
      >
        P L A Y L I S T
      </Styled.Title>
    </Styled.Layout>
  );
};

export default MobileHeader;
