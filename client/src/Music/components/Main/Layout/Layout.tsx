import * as Styled from './Layout.styled';
import { useEffect } from 'react';
import { useResolution } from 'hooks/useResolution';
import { useMusicPageUIControl } from 'hooks/useMusicPageUIControl';

import { MusicList } from '../MusicList';
import { PlayList } from '../PlayList';

const Layout = () => {
  const { isOpenMusicList } = useMusicPageUIControl();
  const { resolution, setResolution } = useResolution();

  useEffect(() => {
    // 새로고침시 상태유지
    return window.innerWidth >= 1200 ? setResolution('DESKTOP') : setResolution('MOBILE');
  }, [resolution]);

  const renderUI = resolution === 'DESKTOP' ? DeskTopUI() : MobileUI(isOpenMusicList);
  return <>{renderUI}</>;
};

const DeskTopUI = () => {
  return (
    <Styled.DeskTopLayout direction="row" alignItems="center" justifyContent="center">
      <MusicList />
      <PlayList />
    </Styled.DeskTopLayout>
  );
};
const MobileUI = (isOpenMusicList) => {
  return <Styled.MobileLayout direction="column">{isOpenMusicList ? <MusicList /> : <PlayList />}</Styled.MobileLayout>;
};
export default Layout;
