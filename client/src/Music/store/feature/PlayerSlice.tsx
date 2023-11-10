import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { PlayerStateType } from 'shared/types/store';
import type { PlayerControlModuleType, MusicItemType } from 'Music/types';
import { PlayerControlModule_INIT } from 'Music/constants/player';

const initialState: PlayerStateType = {
  list: [],
  playingMusic: { source_url: '', name: '', img_url: '', id: 0 },
  playerControlModuleState: PlayerControlModule_INIT,
};

// Reducer
export const playerSlice = createSlice({
  name: 'musicPlayer',
  initialState,
  // 동기적인 액션 처리
  reducers: {
    // 플레이어에 add 해주는 함수
    handleAddPlayer: (state: PlayerStateType, action: PayloadAction<MusicItemType>) => {
      state.list = [...state.list, Object.assign({}, action.payload)];
    },
    handleShuffleMusics: (state: PlayerStateType, action: PayloadAction<MusicItemType[]>) => {
      state.list = action.payload;
    },
    // string바꿔야할듯
    handleRemoveMusic: (state: PlayerStateType, action: PayloadAction<string>) => {
      state.list = state.list.filter((music) => music.name !== action.payload);
    },
    handleSetMusic: (state: PlayerStateType, action: PayloadAction<MusicItemType>) => {
      state.playingMusic = action.payload;
    },
    handlePrevPlayMusic: (state: PlayerStateType, action: PayloadAction<MusicItemType>) => {
      state.playingMusic = action.payload;
    },
    handleNextPlayMusic: (state: PlayerStateType, action: PayloadAction<MusicItemType>) => {
      state.playingMusic = action.payload;
    },
    handleRepeatMusicModule: (state: PlayerStateType, action: PayloadAction<PlayerControlModuleType>) => {
      state.playerControlModuleState = action.payload;
    },
    handlePlayMusicModule: (state: PlayerStateType, action: PayloadAction<PlayerControlModuleType>) => {
      state.playerControlModuleState = action.payload;
    },
    handleVolumeMusicModule: (state: PlayerStateType, action: PayloadAction<PlayerControlModuleType>) => {
      state.playerControlModuleState = action.payload;
    },
    handleProgressBarModule: (state: PlayerStateType, action: PayloadAction<PlayerControlModuleType>) => {
      state.playerControlModuleState = action.payload;
    },
    handlePlaySelectedMusicModlue: (state: PlayerStateType, action: PayloadAction<PlayerControlModuleType>) => {
      state.playerControlModuleState = action.payload;
    },
    handleSelectMyPlayList: (state: PlayerStateType, action: PayloadAction<MusicItemType[]>) => {
      state.list = action.payload;
    },
  },

  // 로그아웃시 발생하는 액션
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
export default playerSlice;
export const {
  handleAddPlayer,
  handleSetMusic,
  handleRemoveMusic,
  handleShuffleMusics,
  handlePrevPlayMusic,
  handleNextPlayMusic,
  handleRepeatMusicModule,
  handlePlayMusicModule,
  handleVolumeMusicModule,
  handleProgressBarModule,
  handlePlaySelectedMusicModlue,
  handleSelectMyPlayList,
} = playerSlice.actions;
