import * as Styled from './MusicPage.styled';

import { Navigation, Genre, Main, Footer, CustomPlayList } from 'Music/components';
import { usePlayerController, useMusicPageUIController } from 'Music/components/hooks';

const MusicPage = () => {
  const { musicPlayer, playerModuleSelector } = usePlayerController();
  const { isOpenCustomPlayListUI } = useMusicPageUIController();

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
