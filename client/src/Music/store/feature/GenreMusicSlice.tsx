import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkApiType } from 'shared/store/store';
import { PURGE } from 'redux-persist';
import type { GenreMusicStateType } from 'shared/types/store';
import type { ResponseGenreMusicType, RequestGenreMusicType } from 'Music/types';
import { getByMusicListId } from 'Music/api';

export const initialState: GenreMusicStateType = {
  store: {
    status: false,
    genre_title: '',
    genre_id: 1,
    music_list: [],
    isFirstPage: true,
    isLastPage: false,
    page: 0,
    size: 11,
    totalPage: 0,
    isFetching: false,
    isSpinner: true,
  },
};

const getMusicList = createAsyncThunk<ResponseGenreMusicType, RequestGenreMusicType, ThunkApiType>(
  'page/musicList',
  async (payload, thunkApi) => {
    try {
      const response = getByMusicListId(payload);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const getFirstMusicList = createAsyncThunk<ResponseGenreMusicType, number, ThunkApiType>(
  'first/musicList',
  async (id, thunkApi) => {
    try {
      const obj = { id, size: 11, page: 0 };
      const response = getByMusicListId(obj);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const genreMusicSlice = createSlice({
  name: 'genreMusic',
  initialState,
  reducers: {
    handleFetching: (state: GenreMusicStateType, action: PayloadAction<boolean>) => {
      state.store.isFetching = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMusicList.pending, (state: GenreMusicStateType) => {
      state.store.status = false;
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
        state.store.music_list = state.store.music_list.concat(action.payload.music_list);
        state.store.isFirstPage = action.payload.isFirstPage;
        state.store.isLastPage = action.payload.isLastPage;
        state.store.status = true;
        state.store.isFetching = false;
      }
    );

    builder.addCase(getMusicList.rejected, (state: GenreMusicStateType) => {
      state.store.status = false;
    });

    builder.addCase(getFirstMusicList.pending, (state: GenreMusicStateType) => {
      state.store.isSpinner = true;
    });
    builder.addCase(
      getFirstMusicList.fulfilled,
      (state: GenreMusicStateType, action: PayloadAction<ResponseGenreMusicType>) => {
        state.store.genre_id = action.payload.genre_id;
        state.store.genre_title = action.payload.genre_title;
        state.store.page = action.payload.page;
        state.store.size = action.payload.size;
        state.store.status = action.payload.status;
        state.store.totalPage = action.payload.totalPage;
        state.store.music_list = action.payload.music_list;
        state.store.isFirstPage = action.payload.isFirstPage;
        state.store.isLastPage = action.payload.isLastPage;
        state.store.status = true;
        state.store.isFetching = false;
        state.store.isSpinner = false;
      }
    );
    builder.addCase(getFirstMusicList.rejected, (state: GenreMusicStateType) => {
      state.store.isSpinner = true;
    });
    builder.addCase(PURGE, () => initialState);
  },
});
export default genreMusicSlice;
export { getMusicList, getFirstMusicList };
export const { handleFetching } = genreMusicSlice.actions;
