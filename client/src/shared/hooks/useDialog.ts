import { useContext } from 'react';
import { DiaLogContext } from 'shared/context/dialog';
import type { ConfirmType } from 'shared/types/dialog';

const useDialog = () => {
  const dialogCtx = useContext(DiaLogContext);
  const alarm = dialogCtx.state.alarm;
  const confirm = dialogCtx.state.confirm;

  const showAlarmMessage = (message: string) => {
    dialogCtx.showAlarm(message);
  };
  const showConfirmMessage = (type: ConfirmType) => {
    dialogCtx.showConfirm(type);
  };
  const closeAlarmMessage = () => {
    dialogCtx.closeAlarm();
  };
  const closeConfirmMessage = () => {
    dialogCtx.closeConfirm();
  };

  return {
    showAlarmMessage,
    showConfirmMessage,
    closeAlarmMessage,
    closeConfirmMessage,
    alarm,
    confirm,
  };
};
export default useDialog;
