import * as Styled from './Layout.styled';
import { useMusicPageUIController } from 'Music/hooks';
import { useResolution } from 'shared/hooks';
import GenreMusicLayout from '../GenreMusic/Layout';
import PlayerLayout from '../Player/Layout';

const MainLayout = () => {
  const { isOpenMusicList } = useMusicPageUIController();
  const { resolution } = useResolution();

  return (
    <>
      {resolution === 'DESKTOP' ? (
        <Styled.DeskTopLayout direction="row" alignItems="center" justifyContent="center">
          <GenreMusicLayout />
          <PlayerLayout />
        </Styled.DeskTopLayout>
      ) : (
        <Styled.MobileLayout direction="column">
          {isOpenMusicList ? <GenreMusicLayout /> : <PlayerLayout />}
        </Styled.MobileLayout>
      )}
    </>
  );
};

export default MainLayout;
