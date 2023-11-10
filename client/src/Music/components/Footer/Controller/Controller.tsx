import { IconButton } from 'shared/components';
import type { ControllerProps } from './Controller.types';
import * as Styled from './Controller.styled';
export const Controller = ({ player, onRepeat, onPlay, onPrevMusic, onNextMusic, onShuffleMusic }: ControllerProps) => {
  const isRepeat = player.isrepeat;
  const isPlaying = player.playing;

  return (
    <Styled.Layout direction="row" alignItems="center">
      <Styled.PlayBox direction="row" gap="3px">
        <IconButton onClick={onPrevMusic} name="backward" size="2x" color="white" />
        {isPlaying ? (
          <IconButton onClick={onPlay} name="pause" size="2x" color="white" />
        ) : (
          <IconButton onClick={onPlay} name="play" size="2x" color="gray" />
        )}
        <IconButton onClick={onNextMusic} name="forward" size="2x" color="white" />
      </Styled.PlayBox>

      <Styled.OptionBox direction="row" gap="3px">
        {isRepeat ? (
          <IconButton onClick={onRepeat} name="repeat" size="2x" color="white" />
        ) : (
          <IconButton onClick={onRepeat} name="repeat" size="2x" color="gray" />
        )}

        <IconButton onClick={onShuffleMusic} name="shuffle" size="2x" color="white" />
      </Styled.OptionBox>
    </Styled.Layout>
  );
};

export default Controller;
