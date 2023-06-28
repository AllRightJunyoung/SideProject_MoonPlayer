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
    },
    myPlayList: {
      option: {
        isOpen: true,
      },
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
    handleCustomPlayListUI: (state: MusicUIStateType, action: PayloadAction<boolean>) => {
      state.customPlayList.isOpen = action.payload;
    },
    handlePlayListUI: (state: MusicUIStateType, action: PayloadAction<boolean>) => {
      state.customPlayList.addPlayList.isOpen = action.payload;
    },
    handleMyPlayListOptionUI: (state: MusicUIStateType, action: PayloadAction<boolean>) => {
      state.customPlayList.myPlayList.option.isOpen = action.payload;
    },
    handleMusicListUI: (state: MusicUIStateType, action: PayloadAction<boolean>) => {
      state.main.isOpenMusicList = action.payload;
    },
    handleMusicFooterUI: (state: MusicUIStateType, action: PayloadAction<boolean>) => {
      state.footer.isOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
export const {
  handleCustomPlayListUI,
  handlePlayListUI,
  handleMusicListUI,
  handleMusicFooterUI,
  handleMyPlayListOptionUI,
} = MusicUISlice.actions;
