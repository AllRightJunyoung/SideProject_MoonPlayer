import * as Styled from './Layout.styled';
import { useEffect } from 'react';
import { MusicList } from '../MusicList';
import { PlayList } from '../PlayList';
import { useMusicPageUIController } from 'Music/components/hooks';
import { useResolution } from 'common/hooks';

const Layout = () => {
  const { isOpenMusicList } = useMusicPageUIController();
  const { resolution, setResolution } = useResolution();

  useEffect(() => {
    return window.innerWidth >= 1200 ? setResolution('DESKTOP') : setResolution('MOBILE');
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
