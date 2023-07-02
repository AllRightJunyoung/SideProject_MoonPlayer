import { combineReducers } from '@reduxjs/toolkit';
import { genreSlice } from '../feature/GenreSlice';
import { playerSlice } from '../feature/PlayerSlice';
import { playListSlice } from '../feature/PlayListSlice';
import { MusicUISlice } from '../feature/MusicUISlice';
import { MyPlayListSlice } from '../feature/MyPlayListSlice';

export const music = combineReducers({
  genre: genreSlice.reducer,
  playList: playListSlice.reducer,
  player: playerSlice.reducer,
  musicUI: MusicUISlice.reducer,
  myPlayList: MyPlayListSlice.reducer,
});
