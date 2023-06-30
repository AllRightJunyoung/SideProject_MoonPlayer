import { useContext } from 'react';
import { DiaLogContext } from 'common/context/dialog';
import type { ConfirmType } from 'common/types/dialog';

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
