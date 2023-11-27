import type {
  MusicItemType,
  GenreListItemType,
  PlayerControlModuleType,
  ResponseGenreMusicType,
  MyPlayListType,
} from 'Music/types';
export interface PlayerStateType {
  list: MusicItemType[];
  playingMusic: MusicItemType;
  playerControlModuleState: PlayerControlModuleType;
}

//  비동기 데이터
export interface GenreListStateType {
  list: GenreListItemType[];
  status: string;
}

export interface GenreMusicStateType {
  store: ResponseGenreMusicType;
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
