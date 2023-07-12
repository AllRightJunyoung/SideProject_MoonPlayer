import { useContext } from 'react';
import { DiaLogContext } from 'common/context/dialog';
import { confirmMessage, confirmFailMessage } from 'common/constants/dialog';
import useLogin from 'Login/hooks/useLogin';
import { useAppSelector } from './useReduxStore';
import { postMyPlayList } from 'Music/api';

const useConfirm = () => {
  const addPlayListInput = useAppSelector((state) => state.music.musicUI.customPlayList.addPlayList.input);
  const playerList = useAppSelector((state) => state.music.player.list);
  const accessToken = useAppSelector((state) => state.login.token.access_token);

  const dialogCtx = useContext(DiaLogContext);
  const { signOut } = useLogin();
  const isOpen = dialogCtx.state.confirm.isOpen;
  const confirmState = dialogCtx.state.confirm;

  const handleYesButton = () => {
    dialogCtx.closeConfirm();
    const confirmType = dialogCtx.state.confirm.type;
    if (confirmType === '') return;
    return confirmType === 'Logout' ? logOut() : confirmType === 'PlayListLoad' ? loadMusic() : saveMusic();
  };

  const handleNoButton = () => {
    dialogCtx.closeConfirm();
  };

  const logOut = () => {
    dialogCtx.showAlarm(confirmMessage.Logout);
    signOut();
  };

  const loadMusic = () => {
    dialogCtx.showAlarm(confirmMessage.PlayListLoad);
  };
  const saveMusic = async () => {
    try {
      const result = await postMyPlayList({ accessToken, playerList, title: addPlayListInput });
      if (!result.length) throw new Error();
      dialogCtx.showAlarm(confirmMessage.PlayListSave);
    } catch (err) {
      dialogCtx.showAlarm(confirmFailMessage.PlayListSaveFail);
    }
  };
  const close = () => {
    dialogCtx.closeConfirm();
  };
  return { close, loadMusic, saveMusic, isOpen, handleYesButton, handleNoButton, confirmState };
};

export default useConfirm;
