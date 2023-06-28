/* eslint-disable indent */
import { useAppSelector, useAppDispatch } from 'common/hooks/useReduxStore';
import {
  handleCustomPlayListUI,
  handlePlayListUI,
  handleMusicListUI,
  handleMusicFooterUI,
  handleMyPlayListOptionUI,
} from 'Music/store/feature/MusicUISlice';

const useMusicPageUIController = () => {
  const dispatch = useAppDispatch();
  const isOpenCustomPlayListUI = useAppSelector((state) => state.music.musicUI.customPlayList.isOpen);
  const isOpenAddMusicListUI = useAppSelector((state) => state.music.musicUI.customPlayList.addPlayList.isOpen);
  const isOpenMusicFooterUI = useAppSelector((state) => state.music.musicUI.footer.isOpen);
  const isOpenMusicList = useAppSelector((state) => state.music.musicUI.main.isOpenMusicList);
  const isOpenMyPlayListOptionUI = useAppSelector(
    (state) => state.music.musicUI.customPlayList.myPlayList.option.isOpen
  );

  const onhandleMusicListUI = (isActive: boolean) => {
    dispatch(handleMusicListUI(isActive));
  };

  const onhandleMusicFooterUI = (isActive: boolean) => {
    dispatch(handleMusicFooterUI(isActive));
  };
  const onhandleOpenAddPlayListUI = (isActive: boolean) => {
    dispatch(handlePlayListUI(isActive));
  };

  const onhandleCustomPlayListUI = (isActive: boolean) => {
    dispatch(handleCustomPlayListUI(isActive));
  };
  const onhandleCloseCustomPlayListUI = () => {
    onhandleCustomPlayListUI(false);
    onhandleOpenAddPlayListUI(false);
    dispatch(handleMyPlayListOptionUI(true));
  };
  const onhandleMyPlayListOptionUI = (isActive: boolean) => {
    dispatch(handleMyPlayListOptionUI(isActive));
  };
  return {
    isOpenMusicFooterUI,
    isOpenAddMusicListUI,
    isOpenCustomPlayListUI,
    isOpenMyPlayListOptionUI,
    isOpenMusicList,
    onhandleMusicFooterUI,
    onhandleOpenAddPlayListUI,
    onhandleCustomPlayListUI,
    onhandleCloseCustomPlayListUI,
    onhandleMusicListUI,
    onhandleMyPlayListOptionUI,
  };
};

export default useMusicPageUIController;
