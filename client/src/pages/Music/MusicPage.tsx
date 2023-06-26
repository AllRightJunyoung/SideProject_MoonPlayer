import * as Styled from './MusicPage.styled';
import { usePlayerControlModule } from 'hooks/usePlayerControlModule';
import useMusicPageUIControl from 'hooks/useMusicPageUIControl';
import { Navigation, Genre, Main, Footer, CustomPlayList } from 'Music/components';

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
