/* eslint-disable indent */
import { useAppSelector, useAppDispatch } from 'common/hooks/useReduxStore';
import {
  handleOpenCustomPlayListUI,
  handleOpenAddPlayListUI,
  handleOpenMyPlayListUI,
  handleOpenMusicListUI,
  handleOpenMusicFooterUI,
} from 'Music/store/feature/MusicUISlice';

const useMusicPageUIController = () => {
  const dispatch = useAppDispatch();
  const isOpenCustomPlayListUI = useAppSelector((state) => state.music.musicUI.customPlayList.isOpen);
  const isOpenAddMusicListUI = useAppSelector((state) => state.music.musicUI.customPlayList.addPlayList.isOpen);
  const isOpenMusicFooterUI = useAppSelector((state) => state.music.musicUI.footer.isOpen);
  const isOpenMusicList = useAppSelector((state) => state.music.musicUI.main.isOpenMusicList);
  const isOpenMyPlayListUI = useAppSelector((state) => state.music.musicUI.customPlayList.myPlayList.isOpen);

  const onhandleOpenMusicListUI = (isActive: boolean) => {
    dispatch(handleOpenMusicListUI(isActive));
  };

  const onhandleOpenMusicFooterUI = (isActive: boolean) => {
    dispatch(handleOpenMusicFooterUI(isActive));
  };
  const onhandleOpenAddPlayListUI = (isActive: boolean) => {
    dispatch(handleOpenAddPlayListUI(isActive));
  };

  const onhandleOpenCustomPlayListUI = (isActive: boolean) => {
    dispatch(handleOpenCustomPlayListUI(isActive));
  };
  const onhandleCloseCustomPlayListUI = () => {
    onhandleOpenCustomPlayListUI(false);
    onhandleOpenAddPlayListUI(false);
    dispatch(handleOpenMyPlayListUI(true));
  };
  const onhandleMyPlayListUI = (isActive: boolean) => {
    dispatch(handleOpenMyPlayListUI(isActive));
  };
  return {
    isOpenMusicFooterUI,
    isOpenAddMusicListUI,
    isOpenCustomPlayListUI,
    isOpenMyPlayListUI,
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
