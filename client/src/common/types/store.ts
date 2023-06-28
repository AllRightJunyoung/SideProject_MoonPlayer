import type { MusicItemType, GenreItemType, PlayerControlModuleType, PlayListType } from 'Music/types';
export interface PlayerStateType {
  list: MusicItemType[];
  playingMusic: MusicItemType;
  playerControlModuleState: PlayerControlModuleType;
}

//  비동기 데이터
export interface GenreStateType {
  list: GenreItemType[];
  status: string;
}

export interface PlayListStateType {
  genre: PlayListType;
  status: string;
}

export interface LayoutStateType {
  main: {
    isOpenMusicList: boolean;
  };
  customPlayList: {
    isOpen: boolean;
    addPlayList: {
      isOpen: boolean;
    };
    myPlayList: {
      option: {
        isOpen: boolean;
      };
    };
  };
  footer: {
    isOpen: boolean;
  };
}
