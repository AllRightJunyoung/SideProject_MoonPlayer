import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { MyPlayListStateType } from 'common/types/store';
import { postData } from 'common/utils/axios';
import { PURGE } from 'redux-persist';

const initialState: MyPlayListStateType = {
  status: '',
  myPlayList: [],
};

const saveMyPlayList = createAsyncThunk('myPlayList/postData', async (data: any, thunkApi: any) => {
  try {
    const response = await postData('http://localhost:4001/api/music/createMyMusicList', data);
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message); //  Alert Store 생성해서 오류 발생시 addAlert() action 호출하는 방식으로 UI 노출 가능
  }
});

export const MyPlayListSlice = createSlice({
  name: 'myPlayList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveMyPlayList.pending, (state: MyPlayListStateType) => {
      state.status = 'Loading';
    });
    builder.addCase(saveMyPlayList.fulfilled, (state: MyPlayListStateType, action: PayloadAction<any>) => {
      state.status = 'Complete';
      state.myPlayList = action.payload;
    });

    builder.addCase(saveMyPlayList.rejected, (state) => {
      state.status = 'Fail';
    });
    builder.addCase(PURGE, () => initialState);
  },
});
export default MyPlayListSlice;
export { saveMyPlayList };
