import { confirmMessage } from 'shared/constants/dialog';
import useLogin from 'Login/hooks/useLogin';
import { useAppDispatch, useAppSelector } from './useReduxStore';
import { postUserPlayList } from 'Music/api';
import { handleSelectMyPlayList } from 'Music/store/feature/PlayerSlice';
import { deleteMyPlayList } from 'Music/store/feature/MyPlayListSlice';
import { reportError } from 'shared/utils/error';
import useDialog from './useDialog';
import { useCallback } from 'react';

const useConfirm = () => {
  const dispatch = useAppDispatch();
  const addPlayListInput = useAppSelector((state) => state.music.musicUI.customPlayList.addPlayList.input);
  const playerList = useAppSelector((state) => state.music.player.list);
  const selectedMyPlayList = useAppSelector((state) => state.music.myPlayList.selected);

  const { confirm, showAlarmMessage, closeConfirmMessage } = useDialog();
  const { signOut } = useLogin();
  const isOpen = confirm.isOpen;
  const message = confirm.message;

  const handleYesButton = useCallback(() => {
    closeConfirmMessage();
    const confirmType = confirm.type;
    const deleteMyPlayListTitle = selectedMyPlayList.title;
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
  }, [confirm]);

  const handleNoButton = useCallback(() => {
    closeConfirmMessage();
  }, [confirm]);

  const logOut = useCallback(() => {
    showAlarmMessage(confirmMessage.Logout);
    signOut();
  }, [confirm]);

  const loadMusic = useCallback(() => {
    dispatch(handleSelectMyPlayList(selectedMyPlayList.playList));
    showAlarmMessage(confirmMessage.PlayListLoad);
  }, [confirm]);

  const saveMusic = useCallback(async () => {
    try {
      const result = await postUserPlayList({ playerList, title: addPlayListInput });
      if (!result.length) throw new Error();
      showAlarmMessage(confirmMessage.PlayListSave);
    } catch (err) {
      const errorMessage = reportError(err);
      showAlarmMessage(errorMessage);
    }
  }, [confirm]);
  const deletePlayList = useCallback(
    (title: string) => {
      dispatch(deleteMyPlayList(title));
      showAlarmMessage(confirmMessage.PlayListDelete);
    },
    [confirm]
  );

  const close = useCallback(() => {
    closeConfirmMessage();
  }, [confirm]);
  return {
    close,
    loadMusic,
    saveMusic,
    isOpen,
    message,
    handleYesButton,
    handleNoButton,
    deletePlayList,
  };
};

export default useConfirm;
