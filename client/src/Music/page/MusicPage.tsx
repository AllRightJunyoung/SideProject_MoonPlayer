import * as Styled from './MusicPage.styled';

import { NavBar, GenreLayout, MainLayout, FooterLayout, CustomPlayListLayout } from 'Music/components';
import { usePlayerController, useMusicPageUIController } from 'Music/hooks';
import { Profiler } from 'react';
import { Dialog } from 'shared/components';

const MusicPage = () => {
  const { musicPlayer, playerModuleSelector } = usePlayerController();
  const { isOpenCustomPlayListUI } = useMusicPageUIController();

  return (
    <>
      <Profiler id="GenreLayout" onRender={onRenderCallback}>
        <Dialog />
        <Styled.Layout direction="column">
          <NavBar />
          <GenreLayout />
          <MainLayout />
          {playerModuleSelector.music && musicPlayer}
          <FooterLayout player={playerModuleSelector} />
          {isOpenCustomPlayListUI ? <CustomPlayListLayout /> : <></>}
        </Styled.Layout>
      </Profiler>
    </>
  );
};

export default MusicPage;

function onRenderCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  // Aggregate or log render timings...
  console.log({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  });
}
