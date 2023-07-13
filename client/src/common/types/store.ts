import type { MusicItemType, GenreItemType, PlayerControlModuleType, PlayListType, MyPlayListType } from 'Music/types';
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
export interface MyPlayListStateType {
  status: string;
  totalPlayList: MyPlayListType[];
  selected: {
    playList: MusicItemType[];
    title: string;
  };
}

export interface MusicUIStateType {
  main: {
    isOpenMusicList: boolean;
  };
  customPlayList: {
    isOpen: boolean;
    addPlayList: {
      isOpen: boolean;
      input: string;
    };
    myPlayListTitleList: {
      isOpen: boolean;
    };
  };
  footer: {
    isOpen: boolean;
  };
}
