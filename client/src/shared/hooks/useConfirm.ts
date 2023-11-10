import { confirmMessage } from 'shared/constants/dialog';
import useLogin from 'Login/hooks/useLogin';
import { useAppDispatch, useAppSelector } from './useReduxStore';
import { registerMyPlayList } from 'Music/api';
import { handleSelectMyPlayList } from 'Music/store/feature/PlayerSlice';
import { deleteMyPlayList } from 'Music/store/feature/MyPlayListSlice';
import { reportError } from 'shared/utils/error';
import useDialog from './useDialog';

const useConfirm = () => {
  const dispatch = useAppDispatch();
  const addPlayListInput = useAppSelector((state) => state.music.musicUI.customPlayList.addPlayList.input);
  const playerList = useAppSelector((state) => state.music.player.list);
  const accessToken = useAppSelector((state) => state.login.token.access_token);
  const selectedMyPlayList = useAppSelector((state) => state.music.myPlayList.selected);

  const { confirm, showAlarmMessage, closeConfirmMessage } = useDialog();
  const { signOut } = useLogin();
  const isOpen = confirm.isOpen;
  const message = confirm.message;

  const handleYesButton = () => {
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
  };

  const handleNoButton = () => {
    closeConfirmMessage();
  };

  const logOut = () => {
    showAlarmMessage(confirmMessage.Logout);
    signOut();
  };

  const loadMusic = () => {
    dispatch(handleSelectMyPlayList(selectedMyPlayList.playList));
    showAlarmMessage(confirmMessage.PlayListLoad);
  };
  const saveMusic = async () => {
    try {
      const result = await registerMyPlayList({ accessToken, playerList, title: addPlayListInput });
      if (!result.length) throw new Error();
      showAlarmMessage(confirmMessage.PlayListSave);
    } catch (err) {
      const errorMessage = reportError(err);
      showAlarmMessage(errorMessage);
    }
  };
  const deletePlayList = (title: string) => {
    dispatch(deleteMyPlayList(title));
    showAlarmMessage(confirmMessage.PlayListDelete);
  };

  const close = () => {
    closeConfirmMessage();
  };
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
