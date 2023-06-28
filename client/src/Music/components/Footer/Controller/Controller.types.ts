import type { PlayerControlModuleType } from 'Music/types';
export interface ControllerProps {
  player: PlayerControlModuleType;
  onRepeat: React.MouseEventHandler<HTMLButtonElement>;
  onPlay: React.MouseEventHandler<HTMLButtonElement>;
  onPrevMusic: React.MouseEventHandler<HTMLButtonElement>;
  onNextMusic: React.MouseEventHandler<HTMLButtonElement>;
  onShuffleMusic: React.MouseEventHandler<HTMLButtonElement>;
}
