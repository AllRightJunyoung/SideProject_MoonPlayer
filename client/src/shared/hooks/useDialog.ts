import { useContext } from 'react';
import { DiaLogContext } from 'shared/context/dialog';
import type { ConfirmType } from 'shared/types/dialog';

const useDialog = () => {
  const dialogCtx = useContext(DiaLogContext);

  const showAlarmMessage = (message: string) => {
    dialogCtx.showAlarm(message);
  };
  const showConfirmMessage = (type: ConfirmType) => {
    dialogCtx.showConfirm(type);
  };

  return { showAlarmMessage, showConfirmMessage };
};
export default useDialog;
