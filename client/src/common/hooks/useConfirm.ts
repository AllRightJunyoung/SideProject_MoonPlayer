import { useContext } from 'react';
import { DiaLogContext } from 'common/context/dialog';
import { confirmMessage } from 'common/constants/dialog';
import useLogin from 'Login/hooks/useLogin';
import { useAppDispatch, useAppSelector } from './useReduxStore';
import { registerMyPlayList } from 'Music/api';
import { handleSelectMyPlayList } from 'Music/store/feature/PlayerSlice';
import { deleteMyPlayList } from 'Music/store/feature/MyPlayListSlice';
import { reportError } from 'common/utils/error';

const useConfirm = () => {
  const dispatch = useAppDispatch();
  const addPlayListInput = useAppSelector((state) => state.music.musicUI.customPlayList.addPlayList.input);
  const playerList = useAppSelector((state) => state.music.player.list);
  const accessToken = useAppSelector((state) => state.login.token.access_token);
  const selectedMyPlayList = useAppSelector((state) => state.music.myPlayList.selected.playList);

  const dialogCtx = useContext(DiaLogContext);
  const { signOut } = useLogin();
  const isOpen = dialogCtx.state.confirm.isOpen;
  const confirmState = dialogCtx.state.confirm;

  const handleYesButton = () => {
    dialogCtx.closeConfirm();
    const confirmType = dialogCtx.state.confirm.type;
    const deleteMyPlayListTitle = dialogCtx.state.deletePlayList.title;
    if (confirmType === '') return;

    switch (confirmType) {
      case 'Logout':
        logOut();
        break;
      case 'PlayListLoad':
        loadMusic();
        break;
      case 'PlayListSave':
        saveMusic();
        break;
      case 'PlayListDelete':
        deletePlayList(deleteMyPlayListTitle);
        break;
      default:
        break;
    }
    return;
  };

  const handleNoButton = () => {
    dialogCtx.closeConfirm();
  };

  const logOut = () => {
    dialogCtx.showAlarm(confirmMessage.Logout);
    signOut();
  };

  const loadMusic = () => {
    dispatch(handleSelectMyPlayList(selectedMyPlayList));
    dialogCtx.showAlarm(confirmMessage.PlayListLoad);
  };
  const saveMusic = async () => {
    try {
      const result = await registerMyPlayList({ accessToken, playerList, title: addPlayListInput });
      if (!result.length) throw new Error();
      dialogCtx.showAlarm(confirmMessage.PlayListSave);
    } catch (err) {
      const errorMessage = reportError(err);
      dialogCtx.showAlarm(errorMessage);
    }
  };
  const deletePlayList = (title: string) => {
    dispatch(deleteMyPlayList(title));
    dialogCtx.showAlarm(confirmMessage.PlayListDelete);
  };
  const close = () => {
    dialogCtx.closeConfirm();
  };
  return { close, loadMusic, saveMusic, isOpen, handleYesButton, handleNoButton, confirmState, deletePlayList };
};

export default useConfirm;
