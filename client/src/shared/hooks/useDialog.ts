import { useCallback, useContext, useMemo } from 'react';
import { DiaLogContext } from 'shared/context/dialog';
import type { ConfirmType } from 'shared/types/dialog';

const useDialog = () => {
  const dialogCtx = useContext(DiaLogContext);
  const alarm = useMemo(() => dialogCtx.state.alarm, [dialogCtx.state.alarm]);
  const confirm = useMemo(() => dialogCtx.state.confirm, [dialogCtx.state.confirm]);

  const showAlarmMessage = useCallback(
    (message: string) => {
      dialogCtx.showAlarm(message);
    },
    [alarm]
  );
  const showConfirmMessage = useCallback(
    (type: ConfirmType) => {
      dialogCtx.showConfirm(type);
    },
    [alarm]
  );
  const closeAlarmMessage = useCallback(() => {
    dialogCtx.closeAlarm();
  }, [alarm]);
  const closeConfirmMessage = useCallback(() => {
    dialogCtx.closeConfirm();
  }, [alarm]);

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
