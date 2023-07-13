import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { MusicUIStateType } from 'common/types/store';

export const initialState: MusicUIStateType = {
  main: {
    isOpenMusicList: true,
  },
  customPlayList: {
    isOpen: false,
    addPlayList: {
      isOpen: false,
      input: '',
    },
    myPlayListTitleList: {
      isOpen: true,
    },
  },
  footer: {
    isOpen: false,
  },
};

export const MusicUISlice = createSlice({
  name: 'MusicUI',
  initialState,
  reducers: {
    handleOpenCustomPlayListUI: (state: MusicUIStateType, action: PayloadAction<boolean>) => {
      state.customPlayList.isOpen = action.payload;
    },
    handleOpenAddPlayListUI: (state: MusicUIStateType, action: PayloadAction<boolean>) => {
      state.customPlayList.addPlayList.isOpen = action.payload;
    },
    handleOpenMyPlayListTitleListUI: (state: MusicUIStateType, action: PayloadAction<boolean>) => {
      state.customPlayList.myPlayListTitleList.isOpen = action.payload;
    },
    handleOpenMusicListUI: (state: MusicUIStateType, action: PayloadAction<boolean>) => {
      state.main.isOpenMusicList = action.payload;
    },
    handleOpenMusicFooterUI: (state: MusicUIStateType, action: PayloadAction<boolean>) => {
      state.footer.isOpen = action.payload;
    },
    handleAddPlayListInput: (state: MusicUIStateType, action: PayloadAction<string>) => {
      state.customPlayList.addPlayList.input = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
export const {
  handleOpenCustomPlayListUI,
  handleOpenAddPlayListUI,
  handleOpenMyPlayListTitleListUI,
  handleOpenMusicListUI,
  handleOpenMusicFooterUI,
  handleAddPlayListInput,
} = MusicUISlice.actions;
