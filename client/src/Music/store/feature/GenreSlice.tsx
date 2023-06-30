import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchData } from 'common/utils/axios';
import { PURGE } from 'redux-persist';
import { GenreStateType } from 'common/types/store';
import type { GenreItemType } from 'Music/types';

const initialState: GenreStateType = {
  list: [],
  status: '',
};

// 액션 생성
const fetchmusicGenre = createAsyncThunk('genre', async (url: string, thunkApi: any) => {
  try {
    const response = await fetchData(url);
    return response.music as GenreItemType;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message); //  Alert Store 생성해서 오류 발생시 addAlert() action 호출하는 방식으로 UI 노출 가능
  }
});
// Reducer
export const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchmusicGenre.pending, (state: GenreStateType) => {
      state.status = 'Loading';
    });
    builder.addCase(fetchmusicGenre.fulfilled, (state: GenreStateType, action: PayloadAction<GenreItemType[]>) => {
      state.status = 'Complete';
      state.list = action.payload;
    });

    builder.addCase(fetchmusicGenre.rejected, (state) => {
      state.status = 'Fail';
    });
    builder.addCase(PURGE, () => initialState);
  },
});
export default genreSlice;
export { fetchmusicGenre };