import * as Styled from './Layout.styled';
import { useEffect } from 'react';
import { useMusicPageUIController } from 'Music/hooks';
import { useResolution } from 'common/hooks';
import MusicList from '../MusicList';
import PlayList from '../PlayList';

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
          <MusicList />
          <PlayList />
        </Styled.DeskTopLayout>
      ) : (
        <Styled.MobileLayout direction="column">{isOpenMusicList ? <MusicList /> : <PlayList />}</Styled.MobileLayout>
      )}
    </>
  );
};

export default Layout;
