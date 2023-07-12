import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { MyPlayListStateType } from 'common/types/store';
import type { ThunkApiType } from 'common/store/store';
import type { MyPlayListType, RequestMyPlayListType } from 'Music/types';
import { getMyPlayList } from 'Music/api';

import { PURGE } from 'redux-persist';

const initialState: MyPlayListStateType = {
  status: '',
  myPlayList: [],
};

const fetchMyPlayList = createAsyncThunk<MyPlayListType[], RequestMyPlayListType, ThunkApiType>(
  'type/myPlayListNameList',
  async (token, thunkApi) => {
    try {
      const response = await getMyPlayList(token);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const MyPlayListSlice = createSlice({
  name: 'myPlayList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMyPlayList.pending, (state: MyPlayListStateType) => {
      state.status = 'Loading';
    });
    builder.addCase(
      fetchMyPlayList.fulfilled,
      (state: MyPlayListStateType, action: PayloadAction<MyPlayListType[]>) => {
        state.status = 'Complete';
        state.myPlayList = action.payload;
      }
    );

    builder.addCase(fetchMyPlayList.rejected, (state) => {
      state.status = 'Fail';
    });
    builder.addCase(PURGE, () => initialState);
  },
});
export default MyPlayListSlice;
export { fetchMyPlayList };
