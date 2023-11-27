import * as Styled from './MusicPage.styled';

import { NavBar, GenreLayout, MainLayout, FooterLayout, CustomPlayListLayout } from 'Music/components';
import { usePlayerController, useMusicPageUIController } from 'Music/hooks';
import { memo } from 'react';
import { Dialog, Spinner } from 'shared/components';

const MusicPage = () => {
  const { musicPlayer, playerModuleSelector } = usePlayerController();
  const { isOpenCustomPlayListUI } = useMusicPageUIController();

  return (
    <>
      <Dialog />
      <Styled.Layout direction="column">
        <NavBar />
        <GenreLayout />
        <MainLayout />
        {playerModuleSelector.music && musicPlayer}
        <FooterLayout player={playerModuleSelector} />
        {isOpenCustomPlayListUI ? <CustomPlayListLayout /> : <></>}
      </Styled.Layout>
    </>
  );
};

export default memo(MusicPage);
