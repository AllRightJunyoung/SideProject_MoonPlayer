import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getData } from 'common/utils/axios';
import { PURGE } from 'redux-persist';
import { PlayListStateType } from 'common/types/store';
import type { PlayListType } from 'Music/types';

export const initialState: PlayListStateType = {
  genre: {
    genre_title: '',
    genre_id: 0,
    music_list: [],
  },
  status: '',
};

const getMusicList = createAsyncThunk('musicList', async (url: string, thunkApi) => {
  try {
    const response = await getData(url);
    return response.music as PlayListType;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// Reducer
export const playListSlice = createSlice({
  name: 'musicPlayList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMusicList.pending, (state: PlayListStateType) => {
      state.status = 'Loading';
    });

    // 비동기로 가져올떄 PlayList에 렌더링 할 아이템 속성 변경
    builder.addCase(getMusicList.fulfilled, (state: PlayListStateType, action: PayloadAction<PlayListType>) => {
      state.status = 'Complete';
      state.genre = action.payload;
    });

    builder.addCase(getMusicList.rejected, (state: PlayListStateType) => {
      state.status = 'Fail';
    });
    builder.addCase(PURGE, () => initialState);
  },
});
export default playListSlice;
export { getMusicList };
