import * as Styled from './Layout.styled';

import { formatMusicTime } from 'Music/utils/player';

import { Flex } from 'common/components';
import useMusicPageUIControl from 'Music/hooks/useMusicPageUIController';
import { Controller, HideButton, ProgressBar, Volume, Info } from '..';
import { usePlayerController } from 'Music/hooks';

const Footer = ({ player }) => {
  const { onRepeatMusic, onPlayMusic, onVolumeControl, onShuffleMusics, onSelectPrevMusic, onSelectNextMusic } =
    usePlayerController();

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
        <Volume onVolume={onVolumeControl} volume={playerVolume} />
        <Controller
          player={player}
          onRepeat={onRepeatMusic}
          onPlay={onPlayMusic}
          onPrevMusic={onSelectPrevMusic}
          onNextMusic={onSelectNextMusic}
          onShuffleMusic={onShuffleMusics}
        />
      </Flex>
    </Styled.Layout>
  );
};

export default Footer;
