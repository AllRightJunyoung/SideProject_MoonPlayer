/* eslint-disable indent */
import { useAppSelector, useAppDispatch } from 'shared/hooks/useReduxStore';
import {
  handleOpenCustomPlayListUI,
  handleOpenAddPlayListUI,
  handleOpenMyPlayListTitleListUI,
  handleOpenMusicListUI,
  handleOpenMusicFooterUI,
} from 'Music/store/feature/MusicUISlice';
import { useCallback } from 'react';

const useMusicPageUIController = () => {
  const dispatch = useAppDispatch();
  const isOpenCustomPlayListUI = useAppSelector((state) => state.music.musicUI.customPlayList.isOpen);
  const isOpenAddMusicListUI = useAppSelector((state) => state.music.musicUI.customPlayList.addPlayList.isOpen);
  const isOpenMusicFooterUI = useAppSelector((state) => state.music.musicUI.footer.isOpen);
  const isOpenMusicList = useAppSelector((state) => state.music.musicUI.main.isOpenMusicList);
  const isOpenMyPlayListTitleListUI = useAppSelector(
    (state) => state.music.musicUI.customPlayList.myPlayListTitleList.isOpen
  );

  const onhandleOpenMusicListUI = useCallback((isActive: boolean) => {
    dispatch(handleOpenMusicListUI(isActive));
  }, []);

  const onhandleOpenMusicFooterUI = useCallback((isActive: boolean) => {
    dispatch(handleOpenMusicFooterUI(isActive));
  }, []);
  const onhandleOpenAddPlayListUI = useCallback((isActive: boolean) => {
    dispatch(handleOpenAddPlayListUI(isActive));
  }, []);

  const onhandleOpenCustomPlayListUI = useCallback((isActive: boolean) => {
    dispatch(handleOpenCustomPlayListUI(isActive));
  }, []);
  const onhandleCloseCustomPlayListUI = useCallback(() => {
    onhandleOpenCustomPlayListUI(false);
    onhandleOpenAddPlayListUI(false);
    dispatch(handleOpenMyPlayListTitleListUI(true));
  }, []);
  const onhandleMyPlayListUI = useCallback((isActive: boolean) => {
    dispatch(handleOpenMyPlayListTitleListUI(isActive));
  }, []);
  return {
    isOpenMusicFooterUI,
    isOpenAddMusicListUI,
    isOpenCustomPlayListUI,
    isOpenMyPlayListTitleListUI,
    isOpenMusicList,
    onhandleOpenMusicFooterUI,
    onhandleOpenAddPlayListUI,
    onhandleOpenMusicListUI,
    onhandleCloseCustomPlayListUI,
    onhandleMyPlayListUI,
    onhandleOpenCustomPlayListUI,
  };
};

export default useMusicPageUIController;
