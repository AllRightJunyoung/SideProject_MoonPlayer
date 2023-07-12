import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { MyPlayListStateType } from 'common/types/store';
import type { MusicItemType, RequestMyPlayListType } from 'Music/types';
import type { ThunkApiType } from 'common/store/store';

import { PURGE } from 'redux-persist';

const initialState: MyPlayListStateType = {
  status: '',
  myPlayList: [],
  title: '',
};

export const MyPlayListSlice = createSlice({
  name: 'myPlayList',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase(saveMyPlayList.pending, (state: MyPlayListStateType) => {
  //     state.status = 'Loading';
  //   });
  //   builder.addCase(saveMyPlayList.fulfilled, (state: MyPlayListStateType, action: PayloadAction<MusicItemType[]>) => {
  //     state.status = 'Complete';
  //     state.myPlayList = action.payload;
  //   });

  //   builder.addCase(saveMyPlayList.rejected, (state) => {
  //     state.status = 'Fail';
  //   });
  //   builder.addCase(PURGE, () => initialState);
  // },
});
export default MyPlayListSlice;
// export { saveMyPlayList };
