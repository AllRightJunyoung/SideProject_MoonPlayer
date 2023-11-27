import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkApiType } from 'shared/store/store';
import { PURGE } from 'redux-persist';
import type { GenreMusicStateType } from 'shared/types/store';
import type { ResponseGenreMusicType, RequestGenreMusicType } from 'Music/types';
import { getByMusicListId } from 'Music/api';

export const initialState: GenreMusicStateType = {
  store: {
    status: '',
    genre_title: '',
    genre_id: 1,
    music_list: [],
    isFirstPage: true,
    isLastPage: false,
    page: 0,
    size: 11,
    totalPage: 0,
  },
  isFetching: false,
};

const getMusicList = createAsyncThunk<ResponseGenreMusicType, RequestGenreMusicType, ThunkApiType>(
  'musicList',
  async (payload, thunkApi) => {
    try {
      const response = await getByMusicListId(payload);
      // console.log(response);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// Reducer
export const genreMusicSlice = createSlice({
  name: 'genreMusic',
  initialState,
  reducers: {
    handleFetching: (state: GenreMusicStateType, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMusicList.pending, (state: GenreMusicStateType) => {
      state.store.status = 'Loading';
    });

    builder.addCase(
      getMusicList.fulfilled,
      (state: GenreMusicStateType, action: PayloadAction<ResponseGenreMusicType>) => {
        state.store.genre_id = action.payload.genre_id;
        state.store.genre_title = action.payload.genre_title;
        state.store.page = action.payload.page;
        state.store.size = action.payload.size;
        state.store.status = action.payload.status;
        state.store.totalPage = action.payload.totalPage;
        if (action.payload.isFirstPage) {
          state.store.music_list = action.payload.music_list;
        } else {
          state.store.music_list = state.store.music_list.concat(action.payload.music_list);
        }
        state.store.isFirstPage = action.payload.isFirstPage;
        state.store.isLastPage = action.payload.isLastPage;
        state.isFetching = false;
      }
    );

    builder.addCase(getMusicList.rejected, (state: GenreMusicStateType) => {
      state.store.status = 'Fail';
    });
    builder.addCase(PURGE, () => initialState);
  },
});
export default genreMusicSlice;
export { getMusicList };
export const { handleFetching } = genreMusicSlice.actions;
