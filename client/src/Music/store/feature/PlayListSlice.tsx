import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkApiType } from 'common/store/store';
import { PURGE } from 'redux-persist';
import type { PlayListStateType } from 'common/types/store';
import type { PlayListType } from 'Music/types';
import { getByMusicListId } from 'Music/api';

export const initialState: PlayListStateType = {
  genre: {
    genre_title: '',
    genre_id: 0,
    music_list: [],
  },
  status: '',
};

const getMusicList = createAsyncThunk<PlayListType, number, ThunkApiType>('musicList', async (id, thunkApi) => {
  try {
    const response = getByMusicListId(id);
    return response;
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
