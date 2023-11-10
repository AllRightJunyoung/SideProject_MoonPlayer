import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkApiType } from 'shared/store/store';
import { PURGE } from 'redux-persist';
import type { GenreMusicStateType } from 'shared/types/store';
import type { GenreMusicType } from 'Music/types';
import { getByMusicListId } from 'Music/api';

export const initialState: GenreMusicStateType = {
  genre: {
    genre_title: '',
    genre_id: 0,
    music_list: [],
  },
  status: '',
};

const getMusicList = createAsyncThunk<GenreMusicType, number, ThunkApiType>('musicList', async (id, thunkApi) => {
  try {
    const response = getByMusicListId(id);
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// Reducer
export const genreMusicSlice = createSlice({
  name: 'genreMusic',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMusicList.pending, (state: GenreMusicStateType) => {
      state.status = 'Loading';
    });

    // 비동기로 가져올떄 PlayList에 렌더링 할 아이템 속성 변경
    builder.addCase(getMusicList.fulfilled, (state: GenreMusicStateType, action: PayloadAction<GenreMusicType>) => {
      state.status = 'Complete';
      state.genre = action.payload;
    });

    builder.addCase(getMusicList.rejected, (state: GenreMusicStateType) => {
      state.status = 'Fail';
    });
    builder.addCase(PURGE, () => initialState);
  },
});
export default genreMusicSlice;
export { getMusicList };
