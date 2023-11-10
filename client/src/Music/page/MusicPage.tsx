import * as Styled from './MusicPage.styled';

import { NavBar, Genre, Main, Footer, CustomPlayList } from 'Music/components';
import { usePlayerController, useMusicPageUIController } from 'Music/hooks';
import { Dialog } from 'shared/components';

const MusicPage = () => {
  const { musicPlayer, playerModuleSelector } = usePlayerController();
  const { isOpenCustomPlayListUI } = useMusicPageUIController();

  return (
    <>
      <Dialog />
      <Styled.Layout direction="column">
        <NavBar />
        <Genre />
        <Main />
        {playerModuleSelector.music && musicPlayer}
        <Footer player={playerModuleSelector} />
        {isOpenCustomPlayListUI ? <CustomPlayList /> : <></>}
      </Styled.Layout>
    </>
  );
};

export default MusicPage;
