import { combineReducers } from '@reduxjs/toolkit';
import { genreListSlice } from '../feature/GenreListSlice';
import { playerSlice } from '../feature/PlayerSlice';
import { genreMusicSlice } from '../feature/GenreMusicSlice';
import { MusicUISlice } from '../feature/MusicUISlice';
import { MyPlayListSlice } from '../feature/MyPlayListSlice';

export const music = combineReducers({
  genreList: genreListSlice.reducer,
  genreMusic: genreMusicSlice.reducer,
  player: playerSlice.reducer,
  musicUI: MusicUISlice.reducer,
  myPlayList: MyPlayListSlice.reducer,
});
