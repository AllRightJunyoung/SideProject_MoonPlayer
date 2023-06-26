import { IconButton } from 'common/components';
import type { ControllerProps } from './Controller.types';
import * as Styled from './Controller.styled';

export const Controller = ({ player, onRepeat, onPlay, onPrevMusic, onNextMusic, onShuffleMusic }: ControllerProps) => {
  const isRepeat = player.isrepeat;
  const isPlaying = player.playing;

  return (
    <Styled.Layout direction="row">
      <Styled.FlexBox direction="row" gap="2px">
        {isRepeat ? (
          <IconButton onClick={onRepeat} name="repeat" size="2x" color="white" />
        ) : (
          <IconButton onClick={onRepeat} name="repeat" size="2x" color="gray" />
        )}

        <IconButton onClick={onShuffleMusic} name="shuffle" size="2x" color="white" />
      </Styled.FlexBox>
      <Styled.FlexBox direction="row" gap="3px">
        <IconButton onClick={onPrevMusic} name="backward" size="2x" color="white" />
        {isPlaying ? (
          <IconButton onClick={onPlay} name="pause" size="2x" color="white" />
        ) : (
          <IconButton onClick={onPlay} name="play" size="2x" color="gray" />
        )}
        <IconButton onClick={onNextMusic} name="forward" size="2x" color="white" />
      </Styled.FlexBox>
    </Styled.Layout>
  );
};

export default Controller;
