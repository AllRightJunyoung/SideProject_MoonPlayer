import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ThunkApiType } from 'common/store/store';
import { PURGE } from 'redux-persist';
import { GenreStateType } from 'common/types/store';
import type { GenreItemType } from 'Music/types';
import { getGenreData } from 'Music/api';
const initialState: GenreStateType = {
  list: [],
  status: '',
};

const getMusicGenre = createAsyncThunk<GenreItemType[], string, ThunkApiType>('genre', async (url, thunkApi) => {
  try {
    const response = await getGenreData(url);
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});
// Reducer
export const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMusicGenre.pending, (state: GenreStateType) => {
      state.status = 'Loading';
    });
    builder.addCase(getMusicGenre.fulfilled, (state: GenreStateType, action: PayloadAction<GenreItemType[]>) => {
      state.status = 'Complete';
      state.list = action.payload;
    });

    builder.addCase(getMusicGenre.rejected, (state) => {
      state.status = 'Fail';
    });
    builder.addCase(PURGE, () => initialState);
  },
});
export default genreSlice;
export { getMusicGenre };
