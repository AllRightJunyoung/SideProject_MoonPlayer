import * as Styled from './Layout.styled';
import { useEffect } from 'react';
import { useMusicPageUIController } from 'Music/hooks';
import { useResolution } from 'shared/hooks';
import GenreMusicLayout from '../GenreMusic/Layout';
import PlayerLayout from '../Player/Layout';

const Layout = () => {
  const { isOpenMusicList } = useMusicPageUIController();
  const { resolution, setResolution } = useResolution();

  useEffect(() => {
    return window.innerWidth >= 1200
      ? setResolution('DESKTOP')
      : window.innerWidth >= 768
      ? setResolution('Tablet')
      : setResolution('MOBILE');
  }, [resolution]);

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

export default Layout;
