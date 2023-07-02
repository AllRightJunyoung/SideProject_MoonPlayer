import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { MyPlayListStateType } from 'common/types/store';
import { PURGE } from 'redux-persist';

const initialState: MyPlayListStateType = {
  status: '',
  myPlayList: [],
};

const saveMyPlayList = createAsyncThunk('genre', async (url: string, thunkApi: any) => {
  try {
    // const response = await fetchData(url);
    // return response.music;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message); //  Alert Store 생성해서 오류 발생시 addAlert() action 호출하는 방식으로 UI 노출 가능
  }
});

export const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveMyPlayList.pending, (state: MyPlayListStateType) => {
      state.status = 'Loading';
    });
    builder.addCase(saveMyPlayList.fulfilled, (state: MyPlayListStateType, action: PayloadAction<any[]>) => {
      state.status = 'Complete';
      state.myPlayList = action.payload;
    });

    builder.addCase(saveMyPlayList.rejected, (state) => {
      state.status = 'Fail';
    });
    builder.addCase(PURGE, () => initialState);
  },
});
export default genreSlice;
export { saveMyPlayList };
