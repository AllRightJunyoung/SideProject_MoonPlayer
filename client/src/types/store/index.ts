import { PlayerControlModuleType } from '../app/player/index';
import { GenreDataType } from 'types/app/genre';
import { MusicDataType } from '../app/data/index';
import { PlayListType } from '../app/playList/index';

export interface PlayerStateType {
  list: Array<MusicDataType>;
  playingMusic: MusicDataType;
  playerControlModuleState: PlayerControlModuleType;
}

//  비동기 데이터
export interface GenreStateType {
  list: Array<GenreDataType>;
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

export interface UserStateType {
  kakao: {
    email: string;
    nick: string;
  };
  token: {
    access_token: string;
    expire_in: number;
  };
  provider: string;
}
