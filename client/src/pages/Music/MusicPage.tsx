import Navigation from 'components/Music/Navigation';
import Genre from 'components/Music/Genre';
import CustomPlayList from 'components/Music/CustomPlayList';
import Footer from 'components/Music/Footer';
import { usePlayerControlModule } from 'hooks/usePlayerControlModule';
import useMusicPageUIControl from 'hooks/useMusicPageUIControl';
import Main from 'components/Music/Main';

import * as Styled from './MusicPage.styled';

const MusicPage = () => {
  const { musicPlayer, playerModuleSelector } = usePlayerControlModule();
  const { isOpenCustomPlayListUI } = useMusicPageUIControl();

  return (
    <Styled.Layout direction="column">
      <Navigation />
      <Genre />
      <Main />
      {playerModuleSelector.music && musicPlayer}
      <Footer player={playerModuleSelector} />
      {isOpenCustomPlayListUI ? <CustomPlayList /> : <></>}
    </Styled.Layout>
  );
};

export default MusicPage;
