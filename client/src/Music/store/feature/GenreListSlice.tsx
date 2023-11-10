import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ThunkApiType } from 'shared/store/store';
import { PURGE } from 'redux-persist';
import { GenreListStateType } from 'shared/types/store';
import type { GenreListItemType } from 'Music/types';
import { getGenreData } from 'Music/api';
const initialState: GenreListStateType = {
  list: [],
  status: '',
};

const getMusicGenre = createAsyncThunk<GenreListItemType[], string, ThunkApiType>('genre', async (url, thunkApi) => {
  try {
    const response = await getGenreData(url);
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});
// Reducer
export const genreListSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMusicGenre.pending, (state: GenreListStateType) => {
      state.status = 'Loading';
    });
    builder.addCase(
      getMusicGenre.fulfilled,
      (state: GenreListStateType, action: PayloadAction<GenreListItemType[]>) => {
        state.status = 'Complete';
        state.list = action.payload;
      }
    );

    builder.addCase(getMusicGenre.rejected, (state) => {
      state.status = 'Fail';
    });
    builder.addCase(PURGE, () => initialState);
  },
});
export default genreListSlice;
export { getMusicGenre };
