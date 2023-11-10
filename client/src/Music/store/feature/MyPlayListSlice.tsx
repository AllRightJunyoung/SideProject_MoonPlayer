import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { MyPlayListStateType } from 'shared/types/store';
import type { ThunkApiType } from 'shared/store/store';
import type { MyPlayListType, RequestMyPlayListType, SelectedMyPlayListType } from 'Music/types';
import { getMyPlayList, deleteMyPlayListByTitle } from 'Music/api';

import { PURGE } from 'redux-persist';

const initialState: MyPlayListStateType = {
  status: '',
  totalPlayList: [],
  selected: {
    playList: [],
    title: '',
  },
};

const fetchMyPlayList = createAsyncThunk<MyPlayListType[], RequestMyPlayListType, ThunkApiType>(
  'fetch/myPlayListNameList',
  async (token, thunkApi) => {
    try {
      const response = await getMyPlayList(token);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
const deleteMyPlayList = createAsyncThunk<string, string, ThunkApiType>(
  'delete/myPlayListNameList',
  async (param, thunkApi) => {
    try {
      const response = await deleteMyPlayListByTitle(param);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const MyPlayListSlice = createSlice({
  name: 'myPlayList',
  initialState,
  reducers: {
    selectMyPlayList: (state: MyPlayListStateType, action: PayloadAction<SelectedMyPlayListType>) => {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteMyPlayList.pending, (state: MyPlayListStateType) => {
      state.status = 'Loading';
    });
    builder.addCase(deleteMyPlayList.fulfilled, (state: MyPlayListStateType, action: PayloadAction<string>) => {
      state.status = 'Complete';
      const filteredPlayList = state.totalPlayList.filter((playList) => playList.title !== action.payload);
      state.totalPlayList = filteredPlayList.map((playList, idx) => ({
        ...playList,
        order: idx + 1,
      }));
    });
    builder.addCase(deleteMyPlayList.rejected, (state) => {
      state.status = 'Fail';
    });
    builder.addCase(fetchMyPlayList.pending, (state: MyPlayListStateType) => {
      state.status = 'Loading';
    });
    builder.addCase(
      fetchMyPlayList.fulfilled,
      (state: MyPlayListStateType, action: PayloadAction<MyPlayListType[]>) => {
        state.status = 'Complete';
        state.totalPlayList = action.payload;
      }
    );

    builder.addCase(fetchMyPlayList.rejected, (state) => {
      state.status = 'Fail';
    });
    builder.addCase(PURGE, () => initialState);
  },
});
export default MyPlayListSlice;
export { fetchMyPlayList, deleteMyPlayList };
export const { selectMyPlayList } = MyPlayListSlice.actions;
