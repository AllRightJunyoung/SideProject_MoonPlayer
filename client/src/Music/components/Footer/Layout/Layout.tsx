import * as Styled from './Layout.styled';
import { usePlayerControlModule } from 'hooks/usePlayerControlModule';
import { formatMusicTime } from 'utils/app/Player';

import { Flex } from 'common/components';
import useMusicPageUIControl from 'hooks/useMusicPageUIControl';
import { Controller, HideButton, ProgressBar, Volume, Info } from '..';

const Footer = ({ player }) => {
  const {
    handleRepeatMusicHandler,
    handlePlayMusicHandler,
    handleMusicVolumeHandler,
    handleShuffleMusic,
    handlePrevPlayingMusic,
    handleNextPlayingMusic,
  } = usePlayerControlModule();

  const { isOpenMusicFooterUI } = useMusicPageUIControl();
  const currentTime = formatMusicTime(+player.currentTime);
  const endTime = formatMusicTime(+player.endTime);
  const elapsedTime = Math.floor((+player.currentTime / +player.endTime) * 100); //남은 시간
  const playerVolume = player.volume.toString();
  return (
    <Styled.Layout active={isOpenMusicFooterUI}>
      <HideButton />
      <ProgressBar currentTime={currentTime} endTime={endTime} elapsedTime={elapsedTime} />
      <Info player={player}></Info>
      <Flex direction="row" justifyContent="space-between">
        <Volume onVolume={handleMusicVolumeHandler} volume={playerVolume} />
        <Controller
          player={player}
          onRepeat={handleRepeatMusicHandler}
          onPlay={handlePlayMusicHandler}
          onPrevMusic={handlePrevPlayingMusic}
          onNextMusic={handleNextPlayingMusic}
          onShuffleMusic={handleShuffleMusic}
        />
      </Flex>
    </Styled.Layout>
  );
};

export default Footer;
