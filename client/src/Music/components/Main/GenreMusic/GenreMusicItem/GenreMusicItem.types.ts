import type { MusicItemType } from 'Music/types';
import type { RefObject } from 'react';
export interface GenreMusicItemProps extends MusicItemType {
  ref?: RefObject<HTMLDivElement>;
}
