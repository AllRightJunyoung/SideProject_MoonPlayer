import { useContext } from 'react';
import { DiaLogContext } from 'common/context/dialog';
import { confirmMessage } from 'common/constants/dialog';

import useLogin from 'Login/hooks/useLogin';
import { useAppSelector } from './useReduxStore';
import { myPlayListInputValidation, myPlayListLengthValidation } from 'Music/utils/validation';

const useConfirm = () => {
  const addPlayListInput = useAppSelector((state) => state.music.musicUI.customPlayList.addPlayList.input);
  const playerList = useAppSelector((state) => state.music.player.list);

  const dialogCtx = useContext(DiaLogContext);
  const { signOut } = useLogin();
  const isOpen = dialogCtx.state.confirm.isOpen;
  const confirmState = dialogCtx.state.confirm;

  const handleYesButton = () => {
    dialogCtx.closeConfirm();
    const confirmType = dialogCtx.state.confirm.type;
    if (confirmType === '') return;
    return confirmType === 'Logout' ? logOut() : confirmType === 'Load' ? loadMusic() : saveMusic();
  };

  const handleNoButton = () => {
    dialogCtx.closeConfirm();
  };

  const logOut = () => {
    dialogCtx.showAlarm(confirmMessage.Logout);
    signOut();
  };

  const loadMusic = () => {
    dialogCtx.showAlarm(confirmMessage.Load);
  };
  const saveMusic = () => {
    if (!myPlayListInputValidation(addPlayListInput) || !myPlayListLengthValidation(playerList)) return;
    dialogCtx.showAlarm(confirmMessage.Save);
  };
  const close = () => {
    dialogCtx.closeConfirm();
  };
  return { close, loadMusic, saveMusic, isOpen, handleYesButton, handleNoButton, confirmState };
};

export default useConfirm;
